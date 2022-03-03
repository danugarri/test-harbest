import React from 'react';
import { useState } from 'react';
import { getProducts } from '../service/productsList.service';

export const ProductsList = () => {
    const [products,setProducts] = useState([]);
    getProducts().then(response =>{ 
       const resp= response.data;
        setProducts(resp);
    })


    return (
        <>
            {
            products.map(product => )
            <table>
                <tbody>
                    <tr>

                    </tr>
                </tbody>
            </table>
            }
        </>
    )
}