import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../model/book";

@Component({
    selector: 'sl-book',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
    @Input() book: Book;

    constructor() {
    }

    ngOnInit() {
    }

}
