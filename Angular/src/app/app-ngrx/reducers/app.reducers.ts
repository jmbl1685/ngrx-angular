import {
    actions,
    ActionsType
} from "../actions/app.actions";

export function AppReducer(state: string, action: actions) {

    switch (action.type) {
        case ActionsType.HELLO_WORLD:
            return { message: 'Hello World' }
        case ActionsType.HELLO_WORLD_SUCCESS:
            return { message: 'Hello World Success' }
        case ActionsType.HELLO_WORLD_ERROR:
            return { message: 'Hello World Error' }
        case ActionsType.SHOPPING_CART_PRODUCTS:
            return { product: action.payload }
        default:
            return state
    }
}