import React, { useEffect } from 'react';
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
   
    useEffect(() => {
        getProducts().then(response =>{ 
        const resp:Iproducts[]= response.data;
            setProducts(resp);
        })
    },[])

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
            {
                products.map((product,index) => {
                    const row= Object.values(product);

                    return (
                    <tr>
                        {
                            row.map(cell => (
                                cell === true || cell === false ? <td key= {index}>{`${cell}`} </td> :
                                <td key= {index}>{cell} </td>
                            ))
                        }
                        </tr>
                )
                })
            }
            </tbody>
        </table>
    )
}