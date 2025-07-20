import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Place} from "./model/place.entity";
import {CreateCityDto} from "../cities/dto/create-city.dto";
import {City} from "../cities/model/city.entity";
import {CreatePlaceDto} from "./dto/create-place.dto";
import {UpdatePlaceDto} from "./dto/update-place.dto";

@Injectable()
export class PlacesService {
    constructor(@InjectRepository(Place) private placesRepository: Repository<Place>) {
        // , @InjectRepository(City) private citiesRepository: Repository<City>
    }

    getPlaces(): Promise<Place[]> {
        return this.placesRepository.find();
    };

    getPlace(id: number): Promise<Place> {
        return this.placesRepository.findOneBy({id});
    };

    create(placeDto: CreatePlaceDto, city: City): Promise<Place> {
        const newPlace = new Place();

        newPlace.name = placeDto.name;
        newPlace.description = placeDto.description;
        newPlace.type = placeDto.type;
        newPlace.address = placeDto.address;
        newPlace.picture = placeDto.picture;
        newPlace.city = city;

        return this.placesRepository.save(newPlace);
    };

    async update(placeDto: UpdatePlaceDto, id: number): Promise<Place> {
        const place = await this.getPlace(id);

        place.name = placeDto.name;
        place.description = placeDto.description;
        place.type = placeDto.type;
        place.address = placeDto.address;
        place.picture = placeDto.picture;

        return  this.placesRepository.save(place);
    };

    delete(id:number) {
        return this.placesRepository.delete(id);
    }
}