import { Product } from "../../models/product.model";

export interface AppStore {
    hello: string,
    product: Product
}