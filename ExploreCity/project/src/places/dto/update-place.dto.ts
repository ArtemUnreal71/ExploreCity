import {City} from "../../cities/model/city.entity";

export class UpdatePlaceDto {
    placeId: number;
    name: string;
    description: string;
    type:string;
    address:string;
    picture: string;
}