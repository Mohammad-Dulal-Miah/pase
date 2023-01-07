import React from 'react';
import './OrdersInfo.css';

const OrdersInfo = ({product}) => {

    const {name , category , rentPrice,img} = product; 
    const total = product.rentPrice*product.quantity;
    return (
        <div className='card m-3 p-3 info'>
           <div>
           <img src={img} alt="" height="100" width="100"/>
            <h4>{name}</h4>
            <p>price:{total}</p>
            <button className='btn btn-success'>Remove</button>
           </div>

        </div>
    );
};

export default OrdersInfo;