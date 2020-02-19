import {NgModule} from '@angular/core';

import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatRippleModule,
        MatPaginatorModule,
        MatTableModule,
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatRippleModule,
        MatPaginatorModule,
        MatTableModule,

    ]
})
export class AngularMaterialModule {
}
