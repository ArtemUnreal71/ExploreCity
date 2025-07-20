import { City } from "./model/city.entity";
import { DeleteResult, Repository } from "typeorm";
import { CreateCityDto } from "./dto/create-city.dto";
import { UpdateCityDto } from "./dto/update-city.dto";
export declare class CitiesService {
    private citiesRepository;
    constructor(citiesRepository: Repository<City>);
    getCities(): Promise<City[]>;
    findCity(id: number): Promise<City>;
    create(cityDto: CreateCityDto): Promise<City>;
    update(cityDto: UpdateCityDto): Promise<City>;
    delete(id: number): Promise<DeleteResult>;
}
