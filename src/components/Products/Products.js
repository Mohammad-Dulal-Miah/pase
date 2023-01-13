import React from 'react';
import GetProducts from '../../hooks/getProducts';
import Product from '../Product/Product';
import './Products.css';


const Products = () => {

    const products = GetProducts();

    return (
        <div className='container text-center mt-5 mb-5'>
            <h2><span style={{ borderBottom: "2px solid green",color:"red" }}>Our Products</span></h2>

            <div className='products-container row'>
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;