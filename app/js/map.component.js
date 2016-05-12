System.register(['@angular/core', './map.service'], function(exports_1, context_1) {
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
    var core_1, map_service_1;
    var MapComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            }],
        execute: function() {
            let MapComponent = class MapComponent {
                constructor(_mapService) {
                    this._mapService = _mapService;
                }
                ngOnInit() {
                    this._mapService.loadAPI.then((mapsAPi) => {
                        console.log("Promise hit!");
                        this.map = new mapsAPi.Map(document.getElementById('map'), {
                            center: { lat: -34.397, lng: 150.644 },
                            zoom: 8
                        });
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
                __metadata('design:paramtypes', [map_service_1.MapService])
            ], MapComponent);
            exports_1("MapComponent", MapComponent);
        }
    }
});

//# sourceMappingURL=map.component.js.map
