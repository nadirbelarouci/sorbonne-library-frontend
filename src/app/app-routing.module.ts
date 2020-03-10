import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {UploadBookComponent} from "./upload-book/upload-book.component";
import {BooksComponent} from "./books/books.component";

const routes: Routes = [
    {path: 'upload-book', component: UploadBookComponent},
    {path: '', component: BooksComponent, pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
