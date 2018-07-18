import { Action } from "@ngrx/store";
import { Product } from "../../../models/product.model";

export enum ActionsType {

    HELLO_WORLD = 'HELLO_WORLD',
    HELLO_WORLD_SUCCESS = 'Hello World Success',
    HELLO_WORLD_ERROR = 'Hello World Error',

    SHOPPING_CART_PRODUCTS = ' [shopping-cart] SHOPPING_CART_PRODUCTS',

}

export class HelloWorld implements Action {
    readonly type = ActionsType.HELLO_WORLD
}

export class HelloWorldSuccess implements Action {
    readonly type = ActionsType.HELLO_WORLD_SUCCESS
}

export class HelloWorldError implements Action {
    readonly type = ActionsType.HELLO_WORLD_ERROR
}


export class ShoppingCartProducts implements Action {
    readonly type = ActionsType.SHOPPING_CART_PRODUCTS
    constructor(public payload: Product) { }
}

export type actions =
    | HelloWorld
    | HelloWorldSuccess
    | HelloWorldError
    | ShoppingCartProducts;