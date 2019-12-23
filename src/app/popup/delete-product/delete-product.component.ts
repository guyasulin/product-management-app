import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductModel } from '../../model/productModel';


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteProductComponent>,
    @Inject(MAT_DIALOG_DATA) public product: ProductModel) { }

  ngOnInit() {
  }

  delete() {
    this.dialogRef.close(true);
  }

  close(): void {
    this.dialogRef.close(false);
  }
}
