import { Iproducts } from "../shared/model/productsList.model";
import { types } from "../types/types";

export const getAllAction = (products:Iproducts[]) => {

    return (
        {
            type:types.allProducts,
            payload:products
        }
    )
}