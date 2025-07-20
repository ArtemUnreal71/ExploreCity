import { Place } from "../../places/model/place.entity";
export declare class Review {
    id: number;
    placeId: number;
    author: string;
    text: string;
    stars: number;
    date: Date;
    place: Place;
}
