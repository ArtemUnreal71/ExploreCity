import {Body, Controller, Delete, Get, Param, Post, Put, UnprocessableEntityException} from '@nestjs/common';
import {Place} from "./model/place.entity";
import {PlacesService} from "./places.service";
import {CreateCityDto} from "../cities/dto/create-city.dto";
import {City} from "../cities/model/city.entity";
import {CreatePlaceDto} from "./dto/create-place.dto";
import {CitiesService} from "../cities/cities.service";
import {UpdatePlaceDto} from "./dto/update-place.dto";

@Controller('places')
export class PlacesController {
    constructor(private readonly placesService: PlacesService,private readonly citiesService: CitiesService) {
    }

    @Get()
    places(): Promise<Place[]> {
        return this.placesService.getPlaces();
    }

    @Get(':id')
    getPlace(@Param('id') id: number): Promise<Place> {
        return this.placesService.getPlace(id);
    }

    @Post()
    async addPlace(@Body() placeDto: CreatePlaceDto) : Promise<Place>{
        const placeCity = await this.citiesService.findCity(placeDto.cityId);

        if(!placeCity)
            throw new UnprocessableEntityException();

        return this.placesService.create(placeDto,placeCity);
    }

    @Put()
    async updatePlace(@Body() placeDto: UpdatePlaceDto) : Promise<Place>{
        return this.placesService.update(placeDto,placeDto.placeId);
    }

    @Delete(':id')
    async deletePlace(@Param('id') id: number): Promise<void> {
        await this.placesService.delete(id);
    }
}
