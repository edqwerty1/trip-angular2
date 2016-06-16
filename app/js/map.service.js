System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var url, MapService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcGzz_tZMrgkoArtY3GmnsWoJsAoNJ8fM&callback=_initMap&region=GB';
            MapService = (function () {
                function MapService() {
                    this.loadAPI = new Promise(function (resolve) {
                        window['_initMap'] = function (ev) {
                            console.log('gapi loaded');
                            resolve(window.google.maps);
                        };
                    });
                }
                MapService.prototype.initialise = function () {
                    this.loadScript();
                };
                MapService.prototype.loadScript = function () {
                    console.log('loading..');
                    var node = document.createElement('script');
                    node.src = url;
                    node.async = true;
                    node.defer = true;
                    document.getElementsByTagName('head')[0].appendChild(node);
                };
                MapService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MapService);
                return MapService;
            }());
            exports_1("MapService", MapService);
        }
    }
});

//# sourceMappingURL=map.service.js.map
