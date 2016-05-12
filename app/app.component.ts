import { Component } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { FORM_PROVIDERS } from '@angular/common';
import 'rxjs/add/operator/map';
import {BannerComponent } from './banner.component';
import {LocationsComponent } from './locations.component';
import {MapComponent } from './map.component';
import {LocationStoreService} from './location-store.service';
import {MapService} from './map.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    providers: [
        HTTP_PROVIDERS,
        LocationStoreService,
        FORM_PROVIDERS,
        MapService
    ],
    directives: [BannerComponent, LocationsComponent, MapComponent]
})
export class AppComponent {
    title = 'Trip Planner Implemented with Angular 2.0';
    
}