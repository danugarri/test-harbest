import React, { useEffect, useState } from 'react';
import { Iproducts } from '../../shared/model/productsList.model';
import SyncTwoToneIcon from '@mui/icons-material/SyncTwoTone';
import { getProducts } from '../service/productsList.service';
// import { updateProducts } from '../service/updateProduct';
import { initialState } from '../ProductsList/ProductsList';
import { useDispatch } from 'react-redux';
import { selectProductAction } from '../../actions/selectProductAction';
import { getAllAction } from '../../actions/getAllAction';

export const ProductsTable = (props:any) => {
    const {products,tableHeaders} = props;
    const arrayProductSelected:Iproducts[]= [];
    const [productSelected, setProductSelected] = useState(initialState)
    const dispatch= useDispatch();
    // const storeProducts= useSelector((state:any )=> state.allProducts.all)
    // const [status, setStatus] = useState(false);
    //  const changeStatus = () => {
    //    const preVStatus:boolean =  productSelected.active;
    //    setStatus(!preVStatus);
    //    productSelected.active = status;
    // }
    useEffect(() => {
    
          dispatch(selectProductAction(productSelected))
    },[productSelected,dispatch])
     useEffect(() => {
         dispatch(getAllAction(products))
     },[products,dispatch]);

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