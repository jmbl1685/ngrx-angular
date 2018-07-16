import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { ShoppingCartProducts } from '../../app/app-ngrx/app.actions';
import { AppStore } from '../../app/app-ngrx/app.reduce';

@Component({
    selector: 'product-list-app',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    public _product: Product;

    public products: Array<Product> = [
        new Product(
            'P2018-1',
            'Laptop Dell',
            'Laptop Dell 2018 - Core i5 7100 8gb 1Tb SSD',
            2245000,
            19,
            ['https://http2.mlstatic.com/S_799627-MCO27072440622_032018-O.jpg']
        ),
        new Product(
            'P2018-2',
            'Iphone 8',
            'Iphone 8 Black 64gb 2gb 20mpx',
            2950000,
            2,
            ['https://tradelinestores.s3-accelerate.amazonaws.com/media/product_images/b310115.jpg']
        )
    ]

    constructor(private store: Store<AppStore>) {

    }

    public addToCart(product, index) {

        if (product.Units > 0) {
            const { Id, Name, Description, Price, Images } = product
            this._product = new Product(Id, Name, Description, Price, 1, Images);
            this.products[index].Units -= 1;
            this.store.dispatch(new ShoppingCartProducts(this._product));
        }

    }

}
