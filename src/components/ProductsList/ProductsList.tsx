import React from 'react';
import { useState } from 'react';
import { getProducts } from '../service/productsList.service';

export const ProductsList = () => {
    interface Iproducts {
        name: string;

    }
    const [products,setProducts] = useState([{name:''}]);
    getProducts().then(response =>{ 
       const resp:Iproducts[]= response.data;
        setProducts(resp);
    })


    return (
        <>
            {
            products.map(product => (
                 <table key= 'products'>
                    <tbody>
                        <tr>
                            {product.name}
                        </tr>
                    </tbody>
                </table>
            ) )
           
            }
        </>
    )
}