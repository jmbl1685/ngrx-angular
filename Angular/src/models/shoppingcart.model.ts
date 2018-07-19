import { Product } from "./product.model";

export class ShoppingCart {

    public Id: string;
    public ProductList: Array<Product>;
    public Total: number;
    public DateNow: Date;

    constructor(
        Id?: string,
        ProductList?: Array<Product>,
        Total?: number,
        DateNow?: Date
    ) {
        this.Id = Id;
        this.ProductList = ProductList;
        this.Total = Total;
        this.DateNow = DateNow;
    }

}