import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {name , category , rentPrice , price , img,seller}  = product;

    const navigate = useNavigate();

    const productInfo = (product) =>{

       const path = `/productInformation/${product.id}`;
       navigate(path);

    }

    return (
        <div className='product-container   my-5   p-5 col-md-4 col-sm-12' onClick={()=>productInfo(product)}>
            <h3>{name}</h3>
            <img src={img} alt="" height='100' width='100' className='mx-auto'/>
            <p>Category: { category}</p>
            <p><small>Rent Price:{rentPrice}</small></p>
            <p><small>Price:{price}</small></p>
            <p><small>Seller:{seller}</small></p>
        </div>
    );
};

export default Product;