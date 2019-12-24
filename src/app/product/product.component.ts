import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../model/productModel';
import { DeleteProductComponent } from '../popup/delete-product/delete-product.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public tiltSettings:string;
  
  @Input() product: ProductModel;
  @Output() details = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    // Because the file comes in httt format then I changed to https
    if('https:// != -1') {
      this.product.thumbnailUrl = this.product.thumbnailUrl.replace('http', 'https')
    }
    if ('httpss:// != -1') {
      this.product.thumbnailUrl = this.product.thumbnailUrl.replace('httpss', 'https')
    }
  }

  showMoreDetails(product: ProductModel) {
    this.details.emit(product);
  }

  openDialogDelete(product: ProductModel) {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '380px',
      data: this.product
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.remove.emit(product)
      }
    });
  }
}
