import { Place } from "./model/place.entity";
import { PlacesService } from "./places.service";
import { CreatePlaceDto } from "./dto/create-place.dto";
import { CitiesService } from "../cities/cities.service";
import { UpdatePlaceDto } from "./dto/update-place.dto";
export declare class PlacesController {
    private readonly placesService;
    private readonly citiesService;
    constructor(placesService: PlacesService, citiesService: CitiesService);
    places(): Promise<Place[]>;
    getPlace(id: number): Promise<Place>;
    addPlace(placeDto: CreatePlaceDto): Promise<Place>;
    updatePlace(placeDto: UpdatePlaceDto): Promise<Place>;
    deletePlace(id: number): Promise<void>;
}
