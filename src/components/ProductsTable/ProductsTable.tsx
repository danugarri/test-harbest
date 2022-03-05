import React, { useState } from 'react';
import { Iproducts } from '../../shared/model/productsList.model';
import SyncTwoToneIcon from '@mui/icons-material/SyncTwoTone';
import { getProducts } from '../service/productsList.service';

export const ProductsTable = (props:any) => {
    const {products,tableHeaders} = props;
     const arrayProductSelected:Iproducts[]= [];
     const [ProductSelected, setProductSelected] = useState({})
    
    return(
        <table>
            <thead>
                <tr>
                {
                    tableHeaders.map( (head:string,index:number) => (
                    <th key={index}>
                        {head}
                    </th>
                    ))
                }
                </tr>
            </thead>
            <tbody> 
            {
               
                products.map((product:Iproducts,index:number) => {
                    const row= Object.values(product);
                    
                    const rowSelected= () => {
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
                    }
                     

                    return (
                    <tr key= {index} datatype='row'>
                        {
                            row.map((cell,rowIndex) => (
                                cell === true || cell === false ? <td key= {rowIndex}>{`${cell}`}   <SyncTwoToneIcon color= 'secondary' className= 'update-icon' onClick= {rowSelected}/> </td> :
                                <td key= {rowIndex}>{cell} </td>
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