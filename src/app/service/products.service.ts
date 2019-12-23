import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ProductModel } from '../model/productModel';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: ProductModel[] = [];

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<ProductModel[]>('https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json')
      .pipe(map(res => {
        return res.map((item: ProductModel) => {
          if (item.type == 1) {
            return item.fedex
          }
          if (item.type == 2) {
            return item.ups;
          } else {
            return item
          }
        })
      }
      ), 
        catchError(this.handleError<ProductModel[]>('products', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }

}
