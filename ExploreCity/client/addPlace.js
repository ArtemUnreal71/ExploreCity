const placeConfirm = document.querySelector('#placeConfirm')
const urlSearch = new URLSearchParams(window.location.search);
const cityId = (urlSearch.get('cityId'));
const placeId = (urlSearch.get('placeId')) ?? null;

fillForm();

console.log('cityId:', cityId);
console.log('placeId:', placeId);

placeConfirm.addEventListener('click', async c => {
    c.preventDefault();

    const url = "http://localhost:3000/places/"

    const place = {
        placeId: placeId,
        name: document.querySelector('#placeName').value,
        description: document.querySelector('#placeDescription').value,
        type: document.querySelector('#placeType').value,
        address: document.querySelector('#placeAddr').value,
        picture: document.querySelector('#placePicture').value,
        cityId: cityId
    }

    if (placeId === null) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(place),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } else {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(place),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    window.location.href = "home.html";
})

async function fillForm() {
    if (placeId != null) {
        const url = "http://localhost:3000/places/" + placeId;

        const response = await fetch(url);
        const place = await response.json();

        document.querySelector('#placeName').value = place.name;
        document.querySelector('#placeDescription').value = place.description;
        document.querySelector('#placeType').value = place.type;
        document.querySelector('#placeAddr').value = place.address;
        document.querySelector('#placePicture').value = place.picture;
    }
}
