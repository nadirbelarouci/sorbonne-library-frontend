import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../service/book.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
    selector: 'app-upload-book',
    templateUrl: './upload-book.component.html',
    styleUrls: ['./upload-book.component.css']
})
export class UploadBookComponent implements OnInit {
    formGroup: FormGroup;
    loading: boolean;
    durationInSeconds = 5;

    constructor(private fb: FormBuilder, private bookService: BookService, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.formGroup = this.fb.group({
            bookFile: [undefined, [Validators.required]]
        });
    }

    onSubmit() {
        if (this.formGroup.valid) {
            this.loading = true;

            this.bookService.uploadBook(this.formGroup.controls.bookFile.value)
                .subscribe(() => {
                    this.loading = false;
                    this.snackBar.open('Upload success!', 'dismiss', {duration: this.durationInSeconds * 1000});
                    this.formGroup.controls.bookFile.reset()
                }, () => {
                    this.loading = false;
                    this.snackBar.open('Upload fail!', 'dismiss', {duration: this.durationInSeconds * 1000});
                    this.formGroup.controls.bookFile.reset()
                });
        }
    }
}
