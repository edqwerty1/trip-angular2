import {ILocations, ILocation} from './models/locations';
import { Injectable } from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable, Observer} from 'rxjs/RX';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';

@Injectable()
export class LocationStoreService {
    locations$: Observable<ILocation[]>;
    private _locationsObserver: Observer<ILocation[]>;
    private _dataStore: {
        locations: ILocation[];
    };

    constructor(private _http: Http) {
        this._dataStore = { locations: [] };

        this.locations$ = new Observable(observer => this._locationsObserver = observer)
            .startWith(this._dataStore.locations)
            .share();
    };

    loadLocations() {
        this._http.get('./test-data/locations.json')
            .map((res: Response) => res.json())
            .subscribe(data => {
                this._dataStore.locations = data.todos;
                this._locationsObserver.next(this._dataStore.locations);
            },
            error => console.log(error)
            );
    };

    

}