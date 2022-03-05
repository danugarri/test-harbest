import { Iproducts } from "./productsList.model";

export interface IproductSelected {
    arrayProductSelected:Iproducts[];
    product:Iproducts;
    setProductSelected: (value: React.SetStateAction<{}>) => void;
}