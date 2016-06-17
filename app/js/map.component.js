System.register(['@angular/core', './map.service', './location-store.service'], function(exports_1, context_1) {
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
    var core_1, map_service_1, location_store_service_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            },
            function (location_store_service_1_1) {
                location_store_service_1 = location_store_service_1_1;
            }],
        execute: function() {
            MapComponent = (function () {
                function MapComponent(_mapService, _locationStore) {
                    this._mapService = _mapService;
                    this._locationStore = _locationStore;
                }
                MapComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.locations = this._locationStore.locations$;
                    var map;
                    this._mapService.loadAPI.then(function (mapsAPi) {
                        _this.map = map = new mapsAPi.Map(document.getElementById('map'), {
                            center: { lat: 52.12, lng: -1.24 },
                            zoom: 8
                        });
                        var geocoder = new mapsAPi.Geocoder();
                        _this.locations.subscribe(function (locations) {
                            var _loop_1 = function(loc) {
                                if (locations.hasOwnProperty(loc)) {
                                    var location_1 = locations[loc];
                                    geocoder.geocode({ 'address': location_1.address.address1 + ", " + location_1.address.postCode }, function (results, status) {
                                        if (status === mapsAPi.GeocoderStatus.OK) {
                                            var contentString = "\n                            <div>\n                                <h3>" + location_1.name + "</h3>\n                                <p>Price \u00A3" + location_1.price + "}</p>\n                                <p>Nights " + location_1.nights + "</p>\n                            </div>";
                                            var infowindow_1 = new mapsAPi.InfoWindow({
                                                content: contentString,
                                                maxWidth: 200
                                            });
                                            var marker_1 = new mapsAPi.Marker({
                                                position: results[0].geometry.location,
                                                map: _this.map,
                                                title: location_1.name
                                            });
                                            marker_1.addListener('click', function () {
                                                infowindow_1.open(this.map, marker_1);
                                            });
                                            infowindow_1.open(_this.map, marker_1);
                                        }
                                        else {
                                            alert('Geocode was not successful for the following reason: ' + status);
                                        }
                                    });
                                }
                            };
                            for (var loc in locations) {
                                _loop_1(loc);
                            }
                        });
                        _this._locationStore.loadLocations();
                    });
                };
                MapComponent.prototype.ngAfterViewInit = function () {
                    this._mapService.initialise();
                };
                MapComponent = __decorate([
                    core_1.Component({
                        selector: 'maps',
                        templateUrl: 'app/map.component.html',
                        directives: [],
                        styles: ['#map { height: 100%; }']
                    }), 
                    __metadata('design:paramtypes', [map_service_1.MapService, location_store_service_1.LocationStoreService])
                ], MapComponent);
                return MapComponent;
            }());
            exports_1("MapComponent", MapComponent);
        }
    }
});

//# sourceMappingURL=map.component.js.map
