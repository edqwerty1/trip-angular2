System.register(['@angular/core', 'ng2-bs3-modal/ng2-bs3-modal', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, ng2_bs3_modal_1, http_1;
    var LoginButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            let LoginButtonComponent = class LoginButtonComponent {
                constructor(_http) {
                    this._http = _http;
                    this.submitted = false;
                    this.model = { username: "", password: "" };
                }
                close() {
                    this.modal.close();
                }
                test(form) {
                    console.log(form);
                    form.ngSubmit.emit();
                }
                onSubmit() {
                    console.log("submitted");
                    console.log(this.model);
                }
                login() {
                    this.submitted = true;
                    let body = JSON.stringify(this.modal);
                    this._http.post('http://localhost:3001/sessions/create', body, { headers: contentHeaders })
                        .subscribe(response => {
                        localStorage.setItem('jwt', response.json().id_token);
                        localStorage.setItem('userId', response.json().userId);
                    }, error => {
                        alert(error.text());
                        console.log(error.text());
                    });
                }
            };
            __decorate([
                core_1.ViewChild('loginModal'), 
                __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
            ], LoginButtonComponent.prototype, "modal", void 0);
            LoginButtonComponent = __decorate([
                core_1.Component({
                    selector: 'login-button',
                    templateUrl: 'app/login-button.component.html',
                    directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [http_1.Http])
            ], LoginButtonComponent);
            exports_1("LoginButtonComponent", LoginButtonComponent);
        }
    }
});

//# sourceMappingURL=login-button.component.js.map
