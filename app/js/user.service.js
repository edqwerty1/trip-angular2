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
            function (_2) {}],
        execute: function() {
            let UserStoreService = class UserStoreService {
                constructor(_http) {
                    this._http = _http;
                    this._dataStore = { user: { displayName: null, id: null, username: null } };
                    this.user$ = new RX_1.Observable(observer => this._userObserver = observer)
                        .startWith(this._dataStore.user)
                        .share();
                }
                ;
                login(username, password) {
                    let body = JSON.stringify({ "username": username, "password": password });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    this._http.post('http://localhost:8080/api/session/create', body, { headers: headers })
                        .map((res) => res.json())
                        .subscribe(response => {
                        localStorage.setItem('jwt', response.token);
                        localStorage.setItem('userId', response.userId);
                        this._dataStore.user.displayName = response.displayName;
                        this._dataStore.user.username = response.username;
                        this._dataStore.user.id = response.id;
                        this._userObserver.next(this._dataStore.user);
                    }, error => {
                        alert(error.text());
                        console.log(error.text());
                    });
                }
            };
            UserStoreService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], UserStoreService);
            exports_1("UserStoreService", UserStoreService);
        }
    }
});

//# sourceMappingURL=user.service.js.map
