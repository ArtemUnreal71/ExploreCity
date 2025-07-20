const contentEl = document.querySelector('content');
const placesEl = document.querySelector('places');
const placeInfoEl = document.querySelector('info');
const placeReviewsEl = document.querySelector('reviews');
const addDialog = document.querySelector('#addCityDialog');
const placesDialog = document.querySelector('#cityPlacesDialog');
const placeOverviewDialog = document.querySelector('#placeOverview');
const addCityButton = document.querySelector('#addCityButton');
const addConfirm = document.querySelector('#addCityConfirm');
const editCityButton = document.querySelector('#editCity');
const deleteCityButton = document.querySelector('#deleteCity');
const addPlaceButton = document.querySelector('#addPlace');
const editPlaceButton = document.querySelector('#editPlaceButton');
const deletePlaceButton = document.querySelector('#deletePlaceButton');
const sendReviewButton = document.querySelector('#sendReview');

let cityId = 0;
let placeId = 0;
let editing = false;
loadCities();

addCityButton.addEventListener('click', e => {
    addDialog.showModal();
});

editCityButton.addEventListener('click', async e=>{
    editing = true;
    const url = "http://localhost:3000/cities/" + cityId;

    const response = await fetch(url);
    const city = await response.json();

    addDialog.querySelector('#cityId').value = city.id;
    addDialog.querySelector('#cityName').value = city.city;
    addDialog.querySelector('#cityPicture').value = city.picture;

    addDialog.showModal();
})

deleteCityButton.addEventListener('click', async e => {
    const url = 'http://localhost:3000/cities/' + cityId;

    const response = await fetch(url, {
        method: 'DELETE'
    });

    placesDialog.close();
    loadCities();
})


deletePlaceButton.addEventListener('click', async e => {
    const url = 'http://localhost:3000/places/' + placeId;

    const response = await fetch(url, {
        method: 'DELETE'
    });

    placeOverviewDialog.close();
    loadPlaces(cityId);
})

addPlaceButton.addEventListener('click', e => {
    window.location.href = 'addPlace.html?cityId=' + cityId;
});

editPlaceButton.addEventListener('click', e => {
    window.location.href = 'addPlace.html?cityId=' + cityId + '&placeId=' + placeId;
});

addConfirm.addEventListener('click', async c => {
    c.preventDefault();

    const city = {
        id: document.querySelector('#cityId').value,
        city: document.querySelector('#cityName').value,
        picture: document.querySelector('#cityPicture').value
    }

    const url = "http://localhost:3000/cities/";

    if(editing){
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(city),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        editing = false
    }
    else{
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(city),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    addDialog.querySelector('form').reset();
    addDialog.close();
    loadCities();
});

sendReviewButton.addEventListener('click', async c => {
    c.preventDefault();

    console.log(document.querySelector('input[name="stars"]:checked').value)

    const newReview = {
        author: document.querySelector('#reviewName').value,
        text: document.querySelector('#reviewText').value,
        stars: document.querySelector('input[name="stars"]:checked').value,
        placeId: placeId
    }

    const url = "http://localhost:3000/reviews/"

    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(newReview),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    placeOverviewDialog.querySelector('form').reset();
    placeOverviewDialog.close();
})

async function loadCities() {
    contentEl.replaceChildren();

    const url = "http://localhost:3000/cities/"

    const response = await fetch(url);
    const cities = await response.json();

    cities.forEach(c => {
        const background = document.createElement('background');
        const divWrap = document.createElement('div');
        divWrap.innerText = c.city;
        divWrap.style.backgroundColor = 'rgba(0, 0, 0, 0.20)';
        background.style.backgroundImage = "url('/images/cities/" + c.picture + "')";
        divWrap.style.width = '100%';
        divWrap.style.height = '100%';
        divWrap.style.display = 'flex';
        divWrap.style.alignItems = 'center';
        divWrap.style.justifyContent = 'center';

        background.addEventListener('click', click => {
            placesDialog.showModal();
            loadPlaces(c.id);
        })

        background.appendChild(divWrap);
        contentEl.appendChild(background);
    });
}

async function loadPlaces(id) {
    placesEl.replaceChildren();
    cityId = id;
    const url = "http://localhost:3000/cities/" + id;

    const response = await fetch(url);
    const city = await response.json();

    city.places.forEach(p => {
        const divWrap = document.createElement('div');
        const background = document.createElement('background')
        divWrap.innerHTML = p.name + "<br>" + p.type;
        background.style.backgroundImage = "url('/images/places/" + p.picture + "')";
        divWrap.style.width = '100%';
        divWrap.style.height = '100%';
        divWrap.style.display = 'flex';
        divWrap.style.alignItems = 'center';
        divWrap.style.justifyContent = 'center';

        divWrap.addEventListener('click', async () => {
            placeReviewsEl.replaceChildren();
            placeId = p.id;
            placeInfoEl.querySelector('#placeName').innerText = p.name;
            placeInfoEl.querySelector('#stars').innerText = 'Rating: ' + calculateRating(p.reviews);
            placeInfoEl.querySelector('background').style.backgroundImage = "url('/images/places/" + p.picture + "')";
            placeInfoEl.querySelector('#description').innerText = p.description;

            const url = "http://localhost:3000/places/" + p.id;

            const response = await fetch(url);
            const place = await response.json();

            loadReviews(place);


            placeOverviewDialog.showModal();
        })
        background.appendChild(divWrap);
        placesEl.appendChild(background);
    });
}

function loadReviews(place){
    placeReviewsEl.replaceChildren();

    place.reviews.forEach(r => {
        const nameDiv = document.createElement('div');
        const starsSpan = document.createElement('span');
        const dateDiv = document.createElement('div');
        const reviewText = document.createElement('div');
        const rev = document.createElement('review');
        const deleteDiv = document.createElement('div');
        const deleteRev = document.createElement('button');
        nameDiv.innerText = r.author;
        nameDiv.style.fontSize = '17px';
        nameDiv.style.fontWeight = 'bold';

        for (let i = 0; i < r.stars; i++) {
            starsSpan.innerHTML += ' &#9734 ';
        }
        starsSpan.style.color = 'yellow';
        nameDiv.appendChild(starsSpan);

        dateDiv.innerText = new Date(r.date).toLocaleDateString() + ' ' + new Date(r.date).toLocaleTimeString().substring(0, 5);
        dateDiv.style.float = 'right';
        reviewText.innerText = r.text;

        deleteRev.innerText = 'Delete';
        deleteRev.classList.add('btn', 'btn-danger');

        deleteRev.addEventListener('click', async c=>{
            const urlDel = 'http://localhost:3000/reviews/' + r.id;

            const responseDel = await fetch(urlDel, {
                method: 'DELETE'
            });

            const url = "http://localhost:3000/places/" + place.id;

            const response = await fetch(url);
            const p = await response.json();

            loadReviews(p);
        });

        deleteDiv.style.display = 'flex';
        deleteDiv.style.justifyContent = 'right';
        deleteDiv.style.alignItems = 'center';

        deleteDiv.appendChild(deleteRev);

        rev.appendChild(nameDiv);
        rev.appendChild(dateDiv);
        rev.appendChild(reviewText);
        rev.appendChild(deleteDiv);

        placeReviewsEl.appendChild(rev);
    });

    if(place.reviews.length < 1){
        placeReviewsEl.style.display ='none';
    }else {
        placeReviewsEl.style.display ='block';
    }
}

function calculateRating(reviews)
{
    let count = 0;
    let totalRating = 0;
    reviews.forEach(r =>{
        totalRating += r.stars;
       count += 1;
    })

    if(count !== 0)
        return (totalRating/count).toFixed(2).toString();
    else
        return 'hasn\'t been rated';
}

