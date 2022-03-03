import React from 'react';
import { useState } from 'react';
import { getProducts } from '../service/productsList.service';

export const ProductsList = () => {
    interface Iproducts {
        name: string;
        description: string;
        active: boolean;
        price: number;
        SKU: string;
    }
    const initialState= {
        name:'daniel',
        description: 'front',
        active: true,
        price: 100000,
        SKU:'D000000'
    }
    const tableHeaders= Object.keys(initialState);
    const [products,setProducts] = useState([initialState]);
    getProducts().then(response =>{ 
       const resp:Iproducts[]= response.data;
        setProducts(resp);
    })


    return (
        <table>
            <thead>
                <tr>
                {
                    tableHeaders.map( (head,index) => (
                    <th key={index}>
                        {head}
                    </th>
                    ))
                }
                </tr>
            </thead>
            <tbody>
                 <tr>
            {
            products.map((product,index) => {
                
               return Object.values(product).map(cell => <td key= {index}>{cell} </td>)
               
            })
            }
            </tr>
            </tbody>
        </table>
    )
}