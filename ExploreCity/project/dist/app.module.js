"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const city_entity_1 = require("./cities/model/city.entity");
const place_entity_1 = require("./places/model/place.entity");
const review_entity_1 = require("./reviews/model/review.entity");
const cities_module_1 = require("./cities/cities.module");
const places_module_1 = require("./places/places.module");
const reviews_module_1 = require("./reviews/reviews.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'mysqlstudenti.litv.sssvt.cz',
                port: 3306,
                username: 'zakharchenkoarte',
                password: '123456',
                database: '4b2_zakharchenkoartem_db1',
                entities: [city_entity_1.City, place_entity_1.Place, review_entity_1.Review],
                synchronize: true,
            }), cities_module_1.CitiesModule, places_module_1.PlacesModule, reviews_module_1.ReviewsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map