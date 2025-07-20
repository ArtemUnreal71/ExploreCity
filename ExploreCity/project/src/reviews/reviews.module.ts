import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Review} from "./model/review.entity";
import {ReviewsController} from "./reviews.controller";
import {ReviewsService} from "./reviews.service";
import {PlacesService} from "../places/places.service";
import {Place} from "../places/model/place.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([Review, Place]),],
    controllers: [ReviewsController],
    providers: [ReviewsService, PlacesService],
})
export class ReviewsModule {
}
