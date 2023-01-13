import React from 'react';
import OrderProduct from '../../hooks/orderProduct';
import { deleteProductLocal } from '../../hooks/utilities';
import OrdersInfo from '../OrdersInfo/OrdersInfo';
import './Orders.css';

const Orders = () => {

    
    let orders =  OrderProduct();
   
   console.log(orders)
   

    
    const deleteProduct = (id) =>{
       
        deleteProductLocal(id);
       

    }

  
    return (
        <div className="container">

            <div className='text-center order-container'>
            {
                orders.map(product => <OrdersInfo product={product} deleteProduct={deleteProduct} key={product.id}></OrdersInfo>)
            }
            </div>

            <div className='text-center'>
                <button className='btn btn-warning'>Confirm Order</button>
            </div>
        </div>
    );
};

export default Orders;