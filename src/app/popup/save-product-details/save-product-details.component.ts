import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductModel } from 'src/app/model/productModel';

@Component({
  selector: 'app-save-product-details',
  templateUrl: './save-product-details.component.html',
  styleUrls: ['./save-product-details.component.scss']
})
export class SaveProductDetailsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SaveProductDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public product: ProductModel) { }

  ngOnInit() {
  }

  close(): void {
    this.dialogRef.close(false);
  }

}
