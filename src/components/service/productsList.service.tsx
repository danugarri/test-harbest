import axios from "axios"

const endPoint = 'http://localhost:9000/products'

export const getProducts = () => {
    const url= `${endPoint}`
    // axios.defaults.headers.common['page'] = 1;
    const response = axios.get(url);
    return response;
}