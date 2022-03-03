import axios from "axios"

const url = 'http://localhost:9000/'

export const getProducts = () => {

    
    const response = axios.get(url);
    return response;
}