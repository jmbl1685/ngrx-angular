import { Action } from "@ngrx/store";
import { Product } from "../../models/product.model";

export const HELLO_ADMIN = 'HELLO_ADMIN';
export const SHOPPING_CART_PRODUCTS = 'SHOPPING_CART_PRODUCTS';

export class HelloAdmin implements Action {
    readonly type = HELLO_ADMIN
}

export class ShoppingCartProducts implements Action {
    readonly type = SHOPPING_CART_PRODUCTS
    constructor(public payload: Product){}
}

export type actions = HelloAdmin | ShoppingCartProducts;