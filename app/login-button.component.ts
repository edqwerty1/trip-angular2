import { Component, ViewChild } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import {Http, Response, Headers} from '@angular/http';
import { FormBuilder, Validators } from '@angular/common';

@Component({
    selector: 'login-button',
    templateUrl: 'app/login-button.component.html',
    directives: [MODAL_DIRECTIVES]
})
export class LoginButtonComponent {
    @ViewChild('loginModal')
    modal: ModalComponent;
    submitted = false;
    loginFormModel: any;

    constructor(private _http: Http, private _formBuilder: FormBuilder) {
        this.loginFormModel = this._formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    close() {
        this.modal.close();
    }

    onSubmit() {
        this.loginFormModel.markAsDirty();
        for (let control in this.loginFormModel.controls) {
            this.loginFormModel.controls[control].markAsDirty();
        };

        if (this.loginFormModel.dirty && this.loginFormModel.valid) {
            this.login();
            this.modal.close();
        }
    }

    login() {
        this.submitted = true;
        let body = JSON.stringify({ "username": this.loginFormModel.value.username, "password": this.loginFormModel.value.password });
        this._http.post('http://localhost:8080/api/session/create', body)
            .map((res: Response) => res.json())
            .subscribe(response => {
                localStorage.setItem('jwt', response.token);
            },
            error => {
                alert(error.text());
                console.log(error.text());
            });
    }
}