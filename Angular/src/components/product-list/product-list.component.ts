import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { ShoppingCartProducts, HelloWorld } from '../../app/app-ngrx/actions/app.actions';
import { AppStore } from '../../app/app-ngrx/reducers/app.reduce';
import { AppService } from '../../app/app-ngrx/services/app.services';

@Component({
    selector: 'product-list-app',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

    public _product: Product;

    public products: Array<Product> = []

    constructor(
        private store: Store<AppStore>,
        private appService: AppService
    ) {
        this.LoadProducts();
    }

    public LoadProducts() {

        this.appService.GetProducts().subscribe(res => {

            res.items.forEach(item => {

                this.products.push(new Product(
                    item.itemId,
                    item.name,
                    item.shortDescription,
                    item.salePrice == undefined ? 29900 : item.salePrice,
                    10,
                    [item.largeImage]
                ));

            });
        });
    }

    public addToCart(product, index) {

        if (product.Units > 0) {
            const { Id, Name, Description, Price, Images } = product
            this._product = new Product(Id, Name, Description, Price, 1, Images);
            this.products[index].Units -= 1;
            this.store.dispatch(new ShoppingCartProducts(this._product));
         // this.store.dispatch(new HelloWorld());
        }

    }

}
