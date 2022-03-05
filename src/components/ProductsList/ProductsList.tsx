import React, { useEffect } from 'react';
import { useState } from 'react';
import { Iproducts } from '../../shared/model/productsList.model';
import { ProductsTable } from '../ProductsTable/ProductsTable';
import { getProducts } from '../service/productsList.service';

export const ProductsList = () => {
    
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
        <ProductsTable tableHeaders= {tableHeaders} products= {products}/>
    )
}