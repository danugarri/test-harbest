import axios from "axios"
import { Iproducts } from "../../shared/model/productsList.model";

const endPoint = 'http://localhost:9000/update'

export const updateProducts = (payload:Iproducts) => {
    const url= `${endPoint}`
    const response = axios.put(url,payload);
    return response;
}