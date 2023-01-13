import React from 'react';
import './ProductInformation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const ProductInformation = ({ product }) => {
    const { name, rentPrice, price, img, stock, rating } = product;

    const list = [];

    for (var i = 1; i <= rating; i++) {
        list.push(i);
    }

    return (
        <div className='product-container my-5  p-5 col-md-4 col-sm-12'>

            <div className='image-div'>
                <img src={img} alt="" height='100' width='100' className='mx-auto' />
            </div>

            <div className='m-3 information-div'>
                <h3>{name}</h3>
                <h5><small>Rent Price:{rentPrice}</small></h5>
                <p><small>Price:{price}</small></p>
                <p>Stock:{stock}</p>
                <p>Rating: {rating} stars</p>
                {
                    list.map(n => <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} />)
                }


            </div>
        </div>
    );
};

export default ProductInformation;