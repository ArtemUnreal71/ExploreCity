import { City } from "../../cities/model/city.entity";
import { Review } from "../../reviews/model/review.entity";
export declare class Place {
    id: number;
    cityId: number;
    name: string;
    description: string;
    type: string;
    address: string;
    picture: string;
    city: City;
    reviews: Review[];
}
