import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

@Injectable({
    providedIn: 'root'
})
export class BookService {
    constructor(private http: HttpClient, @Inject("baseUrl") private baseUrl: string) {
    }
    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.baseUrl + 'api/books');
    }
}
