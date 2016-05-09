import { Component } from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';
import {BannerComponent } from './banner.component';
import {LocationsComponent } from './locations.component';
import {LocationStoreService} from './location-store.service';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [
        HTTP_PROVIDERS,
        LocationStoreService
    ],
    directives: [BannerComponent, LocationsComponent]
})
export class AppComponent {
    title = 'To Do List Implemented with Angular 2.0';
    
}