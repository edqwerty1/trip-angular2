import { Component, AfterViewInit, OnInit } from '@angular/core';

import {MapService} from './map.service';


@Component({
    selector: 'maps',
    templateUrl: 'app/map.component.html',
    directives: [],
    styles: ['#map { height: 100%; }']
})
export class MapComponent implements AfterViewInit, OnInit {
     map;
    constructor(private _mapService: MapService) {

    }

    ngOnInit() {
        this._mapService.loadAPI.then((mapsAPi) => {
            console.log("Promise hit!");
            this.map = new mapsAPi.Map(document.getElementById('map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8
            })
        });
    }
    
    ngAfterViewInit() {
        
        this._mapService.initialise();

    }
}