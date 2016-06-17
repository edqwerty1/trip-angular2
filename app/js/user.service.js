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
    var UserStoreService;
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
            UserStoreService = (function () {
                function UserStoreService(_http) {
                    var _this = this;
                    this._http = _http;
                    this._dataStore = { user: { displayName: null, id: null, username: null } };
                    this.user$ = new RX_1.Observable(function (observer) { return _this._userObserver = observer; })
                        .startWith(this._dataStore.user)
                        .share();
                }
                ;
                UserStoreService.prototype.login = function (username, password) {
                    var _this = this;
                    var body = JSON.stringify({ 'username': username, 'password': password });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(hosts_1.Hosts.Host + "/user/login", body, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .toPromise()
                        .then(function (response) {
                        localStorage.setItem('jwt', response.token);
                        localStorage.setItem('userId', response.id);
                        _this._dataStore.user.displayName = response.displayName;
                        _this._dataStore.user.username = response.username;
                        _this._dataStore.user.id = response.id;
                        _this._userObserver.next(_this._dataStore.user);
                    });
                };
                UserStoreService.prototype.register = function (username, password, displayName) {
                    var _this = this;
                    var body = JSON.stringify({ 'username': username, 'password': password, 'displayName': displayName });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this._http.post(hosts_1.Hosts.Host + "/user/create", body, { headers: headers })
                        .map(function (res) { return res.json(); })
                        .toPromise()
                        .then(function (response) {
                        localStorage.setItem('jwt', response.token);
                        localStorage.setItem('userId', response.id);
                        _this._dataStore.user.displayName = response.displayName;
                        _this._dataStore.user.username = response.username;
                        _this._dataStore.user.id = response.id;
                        _this._userObserver.next(_this._dataStore.user);
                    });
                };
                UserStoreService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserStoreService);
                return UserStoreService;
            }());
            exports_1("UserStoreService", UserStoreService);
        }
    }
});

//# sourceMappingURL=user.service.js.map
