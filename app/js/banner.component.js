System.register(['@angular/core', '@angular/platform-browser/src/facade/browser', './login-button.component', './register-button.component'], function(exports_1, context_1) {
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
    var core_1, browser_1, login_button_component_1, register_button_component_1;
    var BannerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (login_button_component_1_1) {
                login_button_component_1 = login_button_component_1_1;
            },
            function (register_button_component_1_1) {
                register_button_component_1 = register_button_component_1_1;
            }],
        execute: function() {
            BannerComponent = (function () {
                function BannerComponent() {
                    this.shrink = false;
                }
                BannerComponent.prototype.onScroll = function (event) {
                    this.shrink = browser_1.document.body.scrollTop > 50;
                };
                BannerComponent = __decorate([
                    core_1.Component({
                        selector: 'banner-shrink',
                        templateUrl: 'app/banner.component.html',
                        styleUrls: ['app/banner.component.css'],
                        directives: [login_button_component_1.LoginButtonComponent, register_button_component_1.RegisterButtonComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BannerComponent);
                return BannerComponent;
            }());
            exports_1("BannerComponent", BannerComponent);
        }
    }
});

//# sourceMappingURL=banner.component.js.map
