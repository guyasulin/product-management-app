import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormField, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatNativeDateModule, MatPaginatorModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';

import { DeleteProductComponent } from './popup/delete-product/delete-product.component';
import { AddProductComponent } from './popup/add-product/add-product.component';
import { ProductsService } from './service/products.service';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SaveProductDetailsComponent } from './popup/save-product-details/save-product-details.component';
import { AngularTiltModule } from 'angular-tilt';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    ProductDetailsComponent,
    DeleteProductComponent,
    AddProductComponent,
    SearchPipe,
    SortPipe,
    SaveProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    NgxPaginationModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularTiltModule
  ],
  exports: [
    MatFormField,
  ],
  entryComponents: [
    DeleteProductComponent,
    AddProductComponent,
    SaveProductDetailsComponent
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
