import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {City} from "./cities/model/city.entity";
import {Place} from "./places/model/place.entity";
import {Review} from "./reviews/model/review.entity";
import {CitiesModule} from "./cities/cities.module";
import {PlacesModule} from "./places/places.module";
import {ReviewsModule} from "./reviews/reviews.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'mysqlstudenti.litv.sssvt.cz',
            port: 3306,
            username: 'zakharchenkoarte',
            password: '123456',
            database: '4b2_zakharchenkoartem_db1',
            entities: [City, Place, Review],
            synchronize: true,
        }), CitiesModule, PlacesModule, ReviewsModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
