
export class ProductModel {
    id?: number;
    name?: string;
    price?: number;
    description?: string;
    creationDate?: number;
    thumbnailUrl?: any;
    type:number;
    fedex: ProductModel;
    ups: ProductModel[];

    constructor(product?: ProductModel) { 
        if (product) {
            this.id = product.id;
            this.name = product.name;
            this.price = product.price;
            this.description = product.description;
            this.creationDate = product.creationDate;
            this.thumbnailUrl = product.thumbnailUrl;
            this.type = product.type;
            this.fedex = new ProductModel(product.fedex);
            if (product.ups) {
                this.ups = product.ups.map(x => new ProductModel(x.fedex));
            }
        }
    }
}

