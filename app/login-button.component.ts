import { Component, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
    selector: 'login-button',
    templateUrl: 'app/login-button.component.html',
    directives: [MODAL_DIRECTIVES]
})
export class LoginButtonComponent {
@ViewChild('loginModal')
    modal: ModalComponent;

    close() {
        this.modal.close();
    }
    
    save() {
        this.modal.close();
    }
}