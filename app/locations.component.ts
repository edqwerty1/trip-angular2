import { Component, OnInit } from 'angular2/core';
import {Observable} from 'rxjs/RX';
import {LocationStoreService} from './location-store.service';
import {ILocation} from './models/locations';

@Component({
    selector: 'locations',
    templateUrl: 'app/locations.component.html',
    directives: []
})
export class LocationsComponent implements OnInit {
    locations: Observable<ILocation[]>;

    constructor(private _locationsStore: LocationStoreService) {
    }

    ngOnInit() {
        this.locations = this._locationsStore.locations$;
        this._locationsStore.loadLocations();
        console.log(this.locations);
        this.locations.subscribe(data => console.log(data));
    }
}