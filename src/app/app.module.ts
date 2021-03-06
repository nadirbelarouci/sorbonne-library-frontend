import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {environment as env} from "../environments/environment";
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "./angular-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import {SearchBarComponent} from "./search-bar/search-bar.component";
import {BookComponent} from './book/book.component';
import {BooksComponent} from "./books/books.component";
import {BookService} from "./service/book.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./InMemoryDataService";
import { AppRoutingModule } from './app-routing.module';
import { UploadBookComponent } from './upload-book/upload-book.component';
import {MaterialFileInputModule} from "ngx-material-file-input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
    declarations: [
        AppComponent, SearchBarComponent, BookComponent, BooksComponent, UploadBookComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        FlexLayoutModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        ),
        AppRoutingModule,
        MaterialFileInputModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatSnackBarModule
    ],
    providers: [{provide: 'baseUrl', useValue: env.baseUrl}, BookService],
    bootstrap: [AppComponent]

})
export class AppModule {
}
