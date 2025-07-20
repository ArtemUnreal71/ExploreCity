import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {City} from "./model/city.entity";
import {CitiesService} from "./cities.service";
import {Place} from "../places/model/place.entity";
import {CreateCityDto} from "./dto/create-city.dto";
import {UpdateCityDto} from "./dto/update-city.dto";

@Controller('cities')
export class CitiesController {
    constructor(private readonly citiesService: CitiesService) {
    }


    @Get()
    cities(): Promise<City[]> {
        return this.citiesService.getCities();
    }

    @Get(':id')
    getStudent(@Param('id') id: number): Promise<City> {
        return this.citiesService.findCity(id);
    }

    @Post()
    addCity(@Body() cityDto: CreateCityDto): Promise<City> {
        return this.citiesService.create(cityDto);
    }

    @Put()
    updateCity(@Body() cityDto: UpdateCityDto): Promise<City> {
        return this.citiesService.update(cityDto);
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: number): Promise<void> {
        await this.citiesService.delete(id);
    }

    @Get('test')
    test(): void {
        console.log('getting')
    }
}
