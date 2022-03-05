import {useState} from 'react';
import { getProducts } from '../components/service/productsList.service';
import { IproductSelected } from '../shared/model/productSelect.model';
import { Iproducts } from '../shared/model/productsList.model';

export const useGetProductSelected = ({arrayProductSelected,product,setProductSelected}:IproductSelected) => {

    const [selection] = useState({});
    getProducts()
    .then(({data}) => {
        data.forEach((myProduct:Iproducts) => {
            const exist=myProduct.name === product.name;
            if(exist)  {
                arrayProductSelected.push(product)
            }
            
        });
        setProductSelected(product)
    })

    return [selection];              
}