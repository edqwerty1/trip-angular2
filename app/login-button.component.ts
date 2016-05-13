import { Component, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {Http, Response, Headers} from '@angular/http';

@Component({
    selector: 'login-button',
    templateUrl: 'app/login-button.component.html',
    directives: [MODAL_DIRECTIVES]
})
export class LoginButtonComponent {
    @ViewChild('loginModal')
    modal: ModalComponent;

    submitted = false;
    model = { username: "", password: "" }
    constructor(private _http: Http) {

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
            .subscribe(
            response => {
                localStorage.setItem('jwt', response.json().id_token);
                localStorage.setItem('userId', response.json().userId);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            }
            );
    }
}