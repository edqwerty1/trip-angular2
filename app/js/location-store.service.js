System.register(['@angular/core', '@angular/http', 'rxjs/RX', 'rxjs/add/operator/share', 'rxjs/add/operator/startWith'], function(exports_1, context_1) {
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
    var core_1, http_1, RX_1;
    var LocationStoreService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (RX_1_1) {
                RX_1 = RX_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            let LocationStoreService = class LocationStoreService {
                constructor(_http) {
                    this._http = _http;
                    this._dataStore = { locations: [] };
                    this.locations$ = new RX_1.Observable(observer => this._locationsObserver = observer)
                        .startWith(this._dataStore.locations)
                        .share();
                }
                ;
                loadLocations() {
                    this._http.get('/app/test-data/locations.json')
                        .map((res) => res.json())
                        .subscribe(data => {
                        this._dataStore.locations = data.locations;
                        this._locationsObserver.next(this._dataStore.locations);
                    }, error => console.log(error));
                }
                ;
                upVote(locationId) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this._http.post(`http://localhost:8080/api/location/${locationId}/upVote`, JSON.stringify({ 'userId': localStorage.getItem('userId') }), { headers: headers })
                        .map(response => response.json())
                        .subscribe(data => {
                        this.loadLocations();
                    }, error => console.log(error));
                }
                downVote(locationId) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this._http.post(`http://localhost:8080/api/location/${locationId}/downVote`, JSON.stringify({ 'userId': localStorage.getItem('userId') }), { headers: headers })
                        .map(response => response.json())
                        .subscribe(data => {
                        this.loadLocations();
                    }, error => console.log(error));
                }
            };
            LocationStoreService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], LocationStoreService);
            exports_1("LocationStoreService", LocationStoreService);
        }
    }
});

//# sourceMappingURL=location-store.service.js.map
