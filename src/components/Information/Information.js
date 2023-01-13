import { useParams } from 'react-router-dom';
import SingleProduct from '../../hooks/singleProduct';
import { addToLocal } from '../../hooks/utilities';
import ProductInformation from '../ProductInformation/ProductInformation';
import './Information.css';

const Information = () => {


    const { productId } = useParams();

    const singleProduct = SingleProduct(productId);

    const addToProduct = (productId) => {

        addToLocal(productId);


    }

    return (
        <div className='container text-center information-container'>

            <div className='singleProduct'>
                <ProductInformation product={singleProduct}></ProductInformation>
                <button className='btn btn-danger' onClick={() => addToProduct(productId)}>Add To Cart</button>
            </div>



        </div>
    );
};

export default Information;