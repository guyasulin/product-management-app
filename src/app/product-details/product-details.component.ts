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
  @Input() product: ProductModel;
  @Input() showDetails: boolean;
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
    this.save.emit(product);
    const dialogRef = this.dialog.open(SaveProductDetailsComponent, {
      width: '380px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
