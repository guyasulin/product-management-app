import { Pipe, PipeTransform } from '@angular/core';
import { ProductModel } from '../model/productModel';

@Pipe({
    name: 'filterProducts',
    pure:false
})
export class SearchPipe implements PipeTransform {

    transform(products: ProductModel[], productName: string): ProductModel[] {
        if (!products || !productName) {
            return products;
        }

        return products.filter(product => 
             product.name.toLowerCase().indexOf(productName.toLowerCase()) !== -1 ||
             product.description.toLowerCase().indexOf(productName.toLowerCase()) !== -1);
    }

}