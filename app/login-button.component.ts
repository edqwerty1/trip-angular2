import { Component } from 'angular2/core';
import { MODAL_DIRECTIVES } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
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
    directives: [MODAL_DIRECTIVES]
})
export class LoginButtonComponent {

}