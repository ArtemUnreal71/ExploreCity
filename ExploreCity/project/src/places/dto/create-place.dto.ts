import {City} from "../../cities/model/city.entity";

export class CreatePlaceDto {
    name: string;
    description: string;
    type:string;
    address:string;
    picture: string;
    cityId:number;
}