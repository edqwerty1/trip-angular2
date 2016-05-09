import { Component } from 'angular2/core';
import {document, window } from 'angular2/src/facade/browser';
@Component({
    selector: 'banner-shrink',
    templateUrl: 'app/banner.component.html',
    styleUrls: ['app/banner.component.css'],
    directives: []
})
export class BannerComponent {
    shrink: boolean = false;
    onScroll(event) {
        this.shrink = document.body.scrollTop > 50;

  }
    
        
}