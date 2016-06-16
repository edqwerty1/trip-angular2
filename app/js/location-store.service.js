System.register(['@angular/core', '@angular/http', 'rxjs/RX', 'rxjs/add/operator/share', 'rxjs/add/operator/startWith', './hosts'], function(exports_1, context_1) {
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
    var core_1, http_1, RX_1, hosts_1;
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
            function (_2) {},
            function (hosts_1_1) {
                hosts_1 = hosts_1_1;
            }],
        execute: function() {
            LocationStoreService = (function () {
                function LocationStoreService(_http) {
                    var _this = this;
                    this._http = _http;
                    this._dataStore = { locations: [] };
                    this.locations$ = new RX_1.Observable(function (observer) { return _this._locationsObserver = observer; })
                        .startWith(this._dataStore.locations)
                        .share();
                }
                ;
                LocationStoreService.prototype.loadLocations = function () {
                    var _this = this;
                    console.log(hosts_1.Hosts.Host);
                    this._http.get(hosts_1.Hosts.Host + "/location/locations")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this._dataStore.locations = data;
                        _this._locationsObserver.next(_this._dataStore.locations);
                    }, function (error) { return console.log(error); });
                };
                ;
                LocationStoreService.prototype.upVote = function (locationId) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this._http.post(hosts_1.Hosts.Host + "/location/" + locationId + "/upVote", JSON.stringify({ 'userId': localStorage.getItem('userId') }), { headers: headers })
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.loadLocations();
                    }, function (error) { return console.log(error); });
                };
                LocationStoreService.prototype.downVote = function (locationId) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this._http.post(hosts_1.Hosts.Host + "/location/" + locationId + "/downVote", JSON.stringify({ 'userId': localStorage.getItem('userId') }), { headers: headers })
                        .map(function (response) { return response.json(); })
                        .subscribe(function (data) {
                        _this.loadLocations();
                    }, function (error) { return console.log(error); });
                };
                LocationStoreService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LocationStoreService);
                return LocationStoreService;
            }());
            exports_1("LocationStoreService", LocationStoreService);
        }
    }
});

//# sourceMappingURL=location-store.service.js.map
