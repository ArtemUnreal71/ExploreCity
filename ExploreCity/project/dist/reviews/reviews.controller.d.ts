import { ReviewsService } from "./reviews.service";
import { Review } from "./model/review.entity";
import { PlacesService } from "../places/places.service";
import { CreateReviewDto } from "./dto/create-review.dto";
export declare class ReviewsController {
    private readonly reviewsService;
    private readonly placesService;
    constructor(reviewsService: ReviewsService, placesService: PlacesService);
    reviews(): Promise<Review[]>;
    createReview(dto: CreateReviewDto): Promise<Review>;
    deleteReview(id: number): Promise<void>;
}
