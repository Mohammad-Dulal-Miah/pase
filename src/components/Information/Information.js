import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import './Information.css';

const Information = () => {

    const [singleProduct , setSingleProduct] = useState({});
    const {productId} = useParams();

    

    useEffect(()=>{
        fetch(`http://localhost:4000/singleProduct/${productId}`)
        .then(res => res.json())
        .then(data => setSingleProduct(data[0]))
    },[productId]);

    return (
        <div className='container text-center information-container'>
           
               <div className='singleProduct'>
                  <Product product = {singleProduct}></Product>
                  <button className='btn btn-danger'>Add To Cart</button>
               </div>


                
        </div>
    );
};

export default Information;