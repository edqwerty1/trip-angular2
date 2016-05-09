import { Component } from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [
        HTTP_PROVIDERS
    ],
    directives: []
})
export class AppComponent {
    title = 'To Do List Implemented with Angular 2.0';
}