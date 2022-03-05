import React from 'react';
import { Iproducts } from '../../shared/model/productsList.model';
import SyncTwoToneIcon from '@mui/icons-material/SyncTwoTone';

export const ProductsTable = (props:any) => {
    const {products,tableHeaders} = props;

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

                    return (
                    <tr key= {index}>
                        {
                            row.map((cell,rowIndex) => (
                                cell === true || cell === false ? <td key= {rowIndex}>{`${cell}`}   <SyncTwoToneIcon color= 'secondary' className= 'update-icon'/> </td> :
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