import { Component, ViewChild, OnInit } from '@angular/core';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormBuilder, Validators } from '@angular/common';
import {UserStoreService} from './user.service';
import {Observable} from 'rxjs/RX';
import {IUser} from './models/user';
@Component({
    selector: 'login-button',
    templateUrl: 'app/login-button.component.html',
    directives: [MODAL_DIRECTIVES]
})
export class LoginButtonComponent implements OnInit {
    @ViewChild('loginModal')
    modal: ModalComponent;
    submitted = false;
    loginFormModel: any;
    user$: Observable<IUser>;
    user: IUser;

    constructor(private _userService: UserStoreService, private _formBuilder: FormBuilder) {
        this.loginFormModel = this._formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    ngOnInit() {
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