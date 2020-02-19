import {Component, OnInit} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';

@Component({
    selector: 'sl-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private media: MediaObserver) {
    }

    ngOnInit(): void {
    }

}
