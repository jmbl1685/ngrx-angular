import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app/app-ngrx/app.reduce';
import { ShoppingCart } from '../../models/shoppingcart.model';

@Component({
    selector: 'shoppingcart-app',
    templateUrl: 'shopping-cart.component.html',
    styleUrls: ['shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

    public shoppingCart: ShoppingCart;

    constructor(private store: Store<AppStore>) {
        this.shoppingCart = new ShoppingCart('SHBR2018-132', [], 0, new Date());
    }

    vertodo(){
        console.log(this.shoppingCart)
    }

    ngOnInit() {
        this.store.subscribe(res => {

            const size = this.shoppingCart.ProductList.length;
            let flag = true;

            if (res.product !== undefined) {

                if (size > 0) {
                    this.shoppingCart.ProductList.forEach(item => {
                        if (item.Id === res.product.Id) {
                           flag = false;
                           item.Units += 1;      
                           item.Price += res.product.Price                     
                        }
                    })
                }

                if (flag)
                    this.shoppingCart.ProductList.push(res.product)
                    this.shoppingCart.Total += res.product.Price
            }

     

        })

    }
}