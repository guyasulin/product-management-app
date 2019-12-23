import { Component, Input } from '@angular/core';
import { ProductModel } from './model/productModel';
import { ProductsService } from './service/products.service';
import { MatDialog } from '@angular/material';
import { AddProductComponent } from './popup/add-product/add-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public products: ProductModel[];
  public filterProducts: ProductModel[];
  public productSelected: ProductModel = null;
  public pageIndex:number;
  public sortType: any;
  public productName:string

  constructor(private productsService: ProductsService,public dialog: MatDialog) { }

  ngOnInit() {
    this.getAll()
  }

  getAll() {
    this.productsService.getAll()
      .subscribe((res) => {
        this.products = res.flat();
      })
  }

  showMoreDetails(product: ProductModel) {
    this.productSelected = new ProductModel(product);
  }

  openDialogAdd() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.products.unshift(result)
      }
    });
  }

  saveDetails(product: ProductModel) {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
        if(element.id == product.id){
          this.products[i] = product;
          break
        }
    }
  }

  deleteProduct(product: ProductModel) {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.id == product.id) {
        this.productSelected = null;
        this.products.splice(i, 1)
        break;
      }
    }
  }
  
  pageEvent(event) {
   this.pageIndex = event.pageIndex
  }
}
