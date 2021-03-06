import { Component, OnInit, Input, SimpleChanges, OnChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../model/productModel';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SaveProductDetailsComponent } from '../popup/save-product-details/save-product-details.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public form: FormGroup;
  public tiltSettings: string;
  @Input() product: ProductModel;
  @Output() save = new EventEmitter();

  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      description: ['', [
        Validators.required,
      ]],
      creationDate: ['', [
        Validators.required,
      ]],
      price: [null, [
        Validators.required,
      ]]
    });
  }

  get name() {
    return this.form.get('name');
  }
  get description() {
    return this.form.get('description');
  }
  get creationDate() {
    return this.form.get('creationDate');
  }
  get price() {
    return this.form.get('price');
  }

  onDialogSave(product: ProductModel) {
    // Because  the file comes from a productComponent in httts format then I changed to http
    this.product.thumbnailUrl = this.product.thumbnailUrl.replace('https', 'http')
    this.save.emit(product);
    const dialogRef = this.dialog.open(SaveProductDetailsComponent, {
      width: '380px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
