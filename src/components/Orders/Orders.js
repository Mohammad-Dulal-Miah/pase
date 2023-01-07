import React from 'react';
import OrderProduct from '../../hooks/orderProduct';
import OrdersInfo from '../OrdersInfo/OrdersInfo';
import './Orders.css';

const Orders = () => {

    const orders = OrderProduct();
    console.log(orders)
    return (
        <div className="container">

            <div className='text-center order-container'>
            {
                orders.map(order => <OrdersInfo product={order} key={order.id}></OrdersInfo>)
            }
            </div>

            <div className='text-center'>
                <button className='btn btn-warning'>Confirm Order</button>
            </div>
        </div>
    );
};

export default Orders;