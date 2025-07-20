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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacesController = void 0;
const common_1 = require("@nestjs/common");
const places_service_1 = require("./places.service");
const create_place_dto_1 = require("./dto/create-place.dto");
const cities_service_1 = require("../cities/cities.service");
const update_place_dto_1 = require("./dto/update-place.dto");
let PlacesController = class PlacesController {
    constructor(placesService, citiesService) {
        this.placesService = placesService;
        this.citiesService = citiesService;
    }
    places() {
        return this.placesService.getPlaces();
    }
    getPlace(id) {
        return this.placesService.getPlace(id);
    }
    async addPlace(placeDto) {
        const placeCity = await this.citiesService.findCity(placeDto.cityId);
        if (!placeCity)
            throw new common_1.UnprocessableEntityException();
        return this.placesService.create(placeDto, placeCity);
    }
    async updatePlace(placeDto) {
        return this.placesService.update(placeDto, placeDto.placeId);
    }
    async deletePlace(id) {
        await this.placesService.delete(id);
    }
};
exports.PlacesController = PlacesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PlacesController.prototype, "places", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlacesController.prototype, "getPlace", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_place_dto_1.CreatePlaceDto]),
    __metadata("design:returntype", Promise)
], PlacesController.prototype, "addPlace", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_place_dto_1.UpdatePlaceDto]),
    __metadata("design:returntype", Promise)
], PlacesController.prototype, "updatePlace", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlacesController.prototype, "deletePlace", null);
exports.PlacesController = PlacesController = __decorate([
    (0, common_1.Controller)('places'),
    __metadata("design:paramtypes", [places_service_1.PlacesService, cities_service_1.CitiesService])
], PlacesController);
//# sourceMappingURL=places.controller.js.map