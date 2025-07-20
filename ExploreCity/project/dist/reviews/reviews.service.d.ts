import { DeleteResult, Repository } from "typeorm";
import { Review } from "./model/review.entity";
import { CreateReviewDto } from "./dto/create-review.dto";
import { Place } from "../places/model/place.entity";
export declare class ReviewsService {
    private reviewsRepository;
    constructor(reviewsRepository: Repository<Review>);
    getReviews(): Promise<Review[]>;
    create(dto: CreateReviewDto, place: Place): Promise<Review>;
    delete(id: number): Promise<DeleteResult>;
}
