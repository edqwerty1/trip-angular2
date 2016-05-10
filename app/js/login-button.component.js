System.register(['angular2/core', 'ng2-bs3-modal/ng2-bs3-modal'], function(exports_1, context_1) {
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
    var core_1, ng2_bs3_modal_1;
    var LoginButtonComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ng2_bs3_modal_1_1) {
                ng2_bs3_modal_1 = ng2_bs3_modal_1_1;
            }],
        execute: function() {
            let LoginButtonComponent = class LoginButtonComponent {
            };
            LoginButtonComponent = __decorate([
                core_1.Component({
                    selector: 'login-button',
                    template: `
    <button type="button" class="btn btn-default" (click)="modal.open()">Open me!</button>

<modal #modal>
    <modal-header [show-close]="true">
        <h4 class="modal-title">I'm a modal!</h4>
    </modal-header>
    <modal-body>
        Hello World!
    </modal-body>
    <modal-footer [show-default-buttons]="true"></modal-footer>
</modal>
`,
                    directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], LoginButtonComponent);
            exports_1("LoginButtonComponent", LoginButtonComponent);
        }
    }
});

//# sourceMappingURL=login-button.component.js.map
