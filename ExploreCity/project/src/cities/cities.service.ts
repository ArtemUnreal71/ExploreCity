import {Injectable} from '@nestjs/common';
import {City} from "./model/city.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {Place} from "../places/model/place.entity";
import {CreateCityDto} from "./dto/create-city.dto";
import {UpdateCityDto} from "./dto/update-city.dto";

@Injectable()
export class CitiesService {
    constructor(@InjectRepository(City) private citiesRepository: Repository<City>) {
        // , @InjectRepository(Place) private placesRepository: Repository<Place>
    }

    getCities(): Promise<City[]> {
        return this.citiesRepository.find();
    }

    findCity(id: number): Promise<City> {
        return this.citiesRepository.findOneBy({id});
    }

    create(cityDto: CreateCityDto): Promise<City> {
        const newCity = new City();
        newCity.city = cityDto.city;
        newCity.picture = cityDto.picture;

        return this.citiesRepository.save(newCity);
    }

    async update(cityDto: UpdateCityDto): Promise<City> {
        const city = await this.findCity(cityDto.id);

        city.city = cityDto.city;
        city.picture = cityDto.picture;

        return this.citiesRepository.save(city);
    }

    delete(id: number): Promise<DeleteResult> {
        return this.citiesRepository.delete(id);
    }
}
