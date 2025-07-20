import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {ReviewsService} from "./reviews.service";
import {Review} from "./model/review.entity";
import {CreatePlaceDto} from "../places/dto/create-place.dto";
import {PlacesService} from "../places/places.service";
import {CreateReviewDto} from "./dto/create-review.dto";

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService, private readonly placesService: PlacesService) {
    }


    @Get()
    reviews(): Promise<Review[]> {
        return this.reviewsService.getReviews();
    }

    @Post()
    async createReview(@Body() dto: CreateReviewDto): Promise<Review> {
        const place = await this.placesService.getPlace(dto.placeId);

        return this.reviewsService.create(dto, place);
    }

    @Delete(':id')
    async deleteReview(@Param('id') id: number): Promise<void> {
        await this.reviewsService.delete(id);
    }

}
