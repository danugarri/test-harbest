import { initialState } from "../components/ProductsList/ProductsList";
import { types } from "../types/types";

export const selectionReducer = (state =initialState,action:any) => {
    switch(action.type) {
        case types.selection :
            return {
                
                product: action.payload
            }
        default :
        return state
    }
}