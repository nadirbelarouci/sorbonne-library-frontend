import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {MatTableDataSource} from "@angular/material/table";
import {BookService} from "../service/book.service";

@Component({
    selector: 'sl-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    books: Observable<Book[]>;
    dataSource: MatTableDataSource<Book> = new MatTableDataSource<Book>();

    constructor(private bookService: BookService) {
    }

    ngOnInit() {

    }

    ngAfterViewInit(): void {

        this.dataSource.paginator = this.paginator;
        this.books = this.dataSource.connect();
        this.bookService.getBooks().subscribe(books => {
            console.log(books);
            this.dataSource.data = books;
        })
    }

    ngOnDestroy() {
        if (this.dataSource) {
            this.dataSource.disconnect();
        }
    }


}
