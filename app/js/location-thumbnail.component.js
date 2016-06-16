System.register(['@angular/core', './location-store.service', './vote.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, location_store_service_1, vote_component_1;
    var LocationThumbnailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (location_store_service_1_1) {
                location_store_service_1 = location_store_service_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            }],
        execute: function() {
            LocationThumbnailComponent = (function () {
                function LocationThumbnailComponent(_locationsStore) {
                    this._locationsStore = _locationsStore;
                }
                ;
                LocationThumbnailComponent = __decorate([
                    core_1.Component({
                        selector: 'location-thumbnail',
                        templateUrl: 'app/location-thumbnail.component.html',
                        inputs: ['location'],
                        directives: [vote_component_1.VoteComponent]
                    }), 
                    __metadata('design:paramtypes', [location_store_service_1.LocationStoreService])
                ], LocationThumbnailComponent);
                return LocationThumbnailComponent;
            }());
            exports_1("LocationThumbnailComponent", LocationThumbnailComponent);
        }
    }
});

//# sourceMappingURL=location-thumbnail.component.js.map
