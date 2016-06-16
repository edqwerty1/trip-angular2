import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/common';
import {UserStoreService} from './user.service';
import {Observable} from 'rxjs/RX';
import {IUser} from './models/user';
import {Modal, IModalOptions} from './modal';

@Component({
    selector: 'login-button',
    templateUrl: 'app/login-button.component.html',
    directives: []
})
export class LoginButtonComponent implements OnInit {
    @ViewChild('loginModal')
    submitted = false;
    loginFormModel: any;
    user$: Observable<IUser>;
    user: IUser;
    modal: Modal;
    modalContent = `
    `;
    constructor(private _userService: UserStoreService, private _formBuilder: FormBuilder) {
        this.loginFormModel = this._formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() {
        var newDiv = document.getElementById("login-button-modal");
        var modalOptions: IModalOptions = {
            backdrop: true,
            keyboard: true,
            duration: 0,
            overlay: document.getElementById("login-button-modal-overlay")
            // content: this.modalContent
        };
        this.modal = new Modal(newDiv, modalOptions);

        this.user$ = this._userService.user$;
        this.user$.subscribe((data) => {
            this.user = data;
        })
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
        this._userService.login(this.loginFormModel.value.username, this.loginFormModel.value.password);
    }
}