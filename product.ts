import { ProductStatus } from "./product-status.enum";


export interface Product {
    
    Id: number,
    Name: string,
    Description: string,
    ImageUrl: string,
    Status: ProductStatus
}
