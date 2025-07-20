import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {Review} from "./model/review.entity";
import {CreateReviewDto} from "./dto/create-review.dto";
import {Place} from "../places/model/place.entity";

@Injectable()
export class ReviewsService {
    constructor(@InjectRepository(Review) private reviewsRepository: Repository<Review>)
    {

    }

    getReviews(): Promise<Review[]> {
        return this.reviewsRepository.find();
    }

    create(dto:CreateReviewDto, place: Place): Promise<Review>{
        const newReview = new Review();

        newReview.author = dto.author;
        newReview.text = dto.text;
        newReview.date = new Date();
        newReview.stars = dto.stars;
        newReview.place = place;

        return this.reviewsRepository.save(newReview);
    }

    delete(id:number) : Promise<DeleteResult> {
        return this.reviewsRepository.delete(id);
    }
}
