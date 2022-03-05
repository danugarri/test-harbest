import { Iproducts } from "../shared/model/productsList.model";
import { types } from "../types/types";

export const selectProductAction = (product:Iproducts) => {

    return (
        {
            type:types.selection,
            payload:product
        }
    )
}