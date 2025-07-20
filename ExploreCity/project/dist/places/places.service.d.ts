import { Repository } from "typeorm";
import { Place } from "./model/place.entity";
import { City } from "../cities/model/city.entity";
import { CreatePlaceDto } from "./dto/create-place.dto";
import { UpdatePlaceDto } from "./dto/update-place.dto";
export declare class PlacesService {
    private placesRepository;
    constructor(placesRepository: Repository<Place>);
    getPlaces(): Promise<Place[]>;
    getPlace(id: number): Promise<Place>;
    create(placeDto: CreatePlaceDto, city: City): Promise<Place>;
    update(placeDto: UpdatePlaceDto, id: number): Promise<Place>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
