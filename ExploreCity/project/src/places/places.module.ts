import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Place} from "./model/place.entity";
import {PlacesController} from "./places.controller";
import {PlacesService} from "./places.service";
import {CitiesService} from "../cities/cities.service";
import {City} from "../cities/model/city.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Place,City]),],
    controllers: [PlacesController,],
    providers: [PlacesService, CitiesService],
})
export class PlacesModule {
}
