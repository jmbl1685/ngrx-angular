export class Product {

    public Id: string;
    public Name: string;
    public Description: string;
    public Price: number;
    public Units: number;
    public Images: Array<string>;

    constructor(
        Id: string,
        Name: string,
        Description: string,
        Price: number,
        Units: number,
        Images: Array<string>
    ) {
        this.Id = Id;
        this.Name = Name;
        this.Description = Description;
        this.Price = Price;
        this.Units = Units;
        this.Images = Images;
    }

}