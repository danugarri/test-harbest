import { Iproducts } from "../shared/model/productsList.model";
import { types } from "../types/types";

const initialProducts:Iproducts[]= [];
export const getProductsReducer = (state =initialProducts,action:any) => {
    switch(action.type) {
        case types.allProducts :
            return {
                
                all: action.payload
            }
        default :
        return state
    }
}