import { useContext, useState } from 'react';
import ProductInfo from '@containers/ProductInfo';
import AppContext from '../context/AppContext';

// Images
import Add from '@icons/bt_add_to_cart.svg';
import Added from '@icons/bt_added_to_cart.svg';


const ProductCard = ({product}) => {
    const { addToCart } = useContext(AppContext);

    const [cart, setCart] = useState(true);
    const [handleClick, setHancleClick] = useState(false);

    const addItem = (item) => {
        setCart(!cart);
        addToCart(item)
    }

    return (
        <div className="product-card" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" >
            
            <img src={ product.images[0] } alt={ product.title } className='rounded-[25px] hover:cursor-pointer' onClickCapture={() => setHancleClick(!handleClick)} />
            <div className="product-info flex justify-between items-center p-2">
                <div>
                    <p className='font-bold'>${ product.price }</p>
                    <p className='font-light'>{ product.title }</p>
                </div>
                <figure className='flex items-center justify-center' onClick={() => addItem(product)} >
                    <img style={{ display: cart ? 'block' : 'none' }} src={ Add } alt="Add to cart" className='hover:cursor-pointer' />
                    <img style={{ display: cart ? 'none' : 'block' }} src={ Added } alt="Add to cart" className='hover:cursor-pointer' />
                </figure>
            </div>

            { handleClick ? <ProductInfo image={product.images[0]} price={product.price} title={product.title} description={product.description} /> : null}
        </div>
    );
}

export default ProductCard;