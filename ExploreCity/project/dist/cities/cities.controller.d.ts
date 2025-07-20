import { City } from "./model/city.entity";
import { CitiesService } from "./cities.service";
import { CreateCityDto } from "./dto/create-city.dto";
import { UpdateCityDto } from "./dto/update-city.dto";
export declare class CitiesController {
    private readonly citiesService;
    constructor(citiesService: CitiesService);
    cities(): Promise<City[]>;
    getStudent(id: number): Promise<City>;
    addCity(cityDto: CreateCityDto): Promise<City>;
    updateCity(cityDto: UpdateCityDto): Promise<City>;
    deleteStudent(id: number): Promise<void>;
    test(): void;
}
