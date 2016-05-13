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
            let MapComponent = class MapComponent {
                constructor(_mapService, _locationStore) {
                    this._mapService = _mapService;
                    this._locationStore = _locationStore;
                }
                ngOnInit() {
                    this.locations = this._locationStore.locations$;
                    var map;
                    this._mapService.loadAPI.then((mapsAPi) => {
                        console.log("Promise hit!");
                        this.map = map = new mapsAPi.Map(document.getElementById('map'), {
                            center: { lat: 52.12, lng: -1.24 },
                            zoom: 8
                        });
                        var geocoder = new mapsAPi.Geocoder();
                        this.locations.subscribe(locations => {
                            for (let loc in locations) {
                                let location = locations[loc];
                                geocoder.geocode({ 'address': `${location.address.address1}, ${location.address.postCode}` }, (results, status) => {
                                    if (status === mapsAPi.GeocoderStatus.OK) {
                                        let contentString = `
                            <div>
                                <h3>${location.name}</h3>
                                <p>Price £${location.price}}</p>
                                <p>Nights ${location.nights}</p>
                            </div>`;
                                        let infowindow = new mapsAPi.InfoWindow({
                                            content: contentString,
                                            maxWidth: 200
                                        });
                                        let marker = new mapsAPi.Marker({
                                            position: results[0].geometry.location,
                                            map: this.map,
                                            title: location.name
                                        });
                                        marker.addListener('click', function () {
                                            infowindow.open(this.map, marker);
                                        });
                                        infowindow.open(this.map, marker);
                                    }
                                    else {
                                        alert('Geocode was not successful for the following reason: ' + status);
                                    }
                                });
                            }
                        });
                        this._locationStore.loadLocations();
                    });
                }
                ngAfterViewInit() {
                    this._mapService.initialise();
                }
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
            exports_1("MapComponent", MapComponent);
        }
    }
});

//# sourceMappingURL=map.component.js.map
