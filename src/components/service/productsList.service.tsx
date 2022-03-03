import axios from "axios"

const url = 'http://localhost:9000/products'

export const getProducts = () => {

    
    const response = axios.get(url);
    return response;
}