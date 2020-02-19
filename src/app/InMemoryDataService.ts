import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Book, BookBuilder} from "./model/book";

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const books: Book[] = this.generateBooks();
        return {books};
    }

    private generateBooks(): Book[] {
        const books = [];
        for (let i = 0; i < 20; i++) {
            books.push(new BookBuilder("book: " + i)
                .setAuthor("Author: " + i)
                .setCover("/assets/book.jpg").build())
        }
        return books;
    }
}
