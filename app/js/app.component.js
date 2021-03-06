System.register(['@angular/core', '@angular/http', '@angular/common', 'rxjs/add/operator/map', './banner.component', './locations.component', './show-map.component', './location-store.service', './map.service', './user.service'], function(exports_1, context_1) {
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
    var core_1, http_1, common_1, banner_component_1, locations_component_1, show_map_component_1, location_store_service_1, map_service_1, user_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (_1) {},
            function (banner_component_1_1) {
                banner_component_1 = banner_component_1_1;
            },
            function (locations_component_1_1) {
                locations_component_1 = locations_component_1_1;
            },
            function (show_map_component_1_1) {
                show_map_component_1 = show_map_component_1_1;
            },
            function (location_store_service_1_1) {
                location_store_service_1 = location_store_service_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Trip Planner Implemented with Angular 2.0';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            location_store_service_1.LocationStoreService,
                            common_1.FORM_PROVIDERS,
                            map_service_1.MapService,
                            user_service_1.UserStoreService
                        ],
                        directives: [banner_component_1.BannerComponent, locations_component_1.LocationsComponent, show_map_component_1.ShowMapComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=app.component.js.map
