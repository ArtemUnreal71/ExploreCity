"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
const typeorm_1 = require("typeorm");
const city_entity_1 = require("../../cities/model/city.entity");
const review_entity_1 = require("../../reviews/model/review.entity");
let Place = class Place {
};
exports.Place = Place;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Place.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Place.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Place.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Place.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Place.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Place.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Place.prototype, "picture", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => city_entity_1.City, city => city.places),
    __metadata("design:type", city_entity_1.City)
], Place.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => review_entity_1.Review, review => review.place, { nullable: false, eager: true }),
    __metadata("design:type", Array)
], Place.prototype, "reviews", void 0);
exports.Place = Place = __decorate([
    (0, typeorm_1.Entity)()
], Place);
//# sourceMappingURL=place.entity.js.map