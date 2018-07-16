import * as fromApp from "./app.actions";

export function AppReducer(state: string, action: fromApp.actions) {

    switch (action.type) {
        case fromApp.HELLO_ADMIN:
            return 'Hello, admin'
        case fromApp.SHOPPING_CART_PRODUCTS :
            return action.payload
        default:
            return state
    }

}