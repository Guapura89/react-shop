import { useState } from 'react';

// Images
import Add from '@icons/bt_add_to_cart.svg';
import Added from '@icons/bt_added_to_cart.svg';


const ProductCard = ({product}) => {
    const [cart, setCart] = useState(true);

    return (
        <div className="product-card">
            
            <img src={ product.images[0] } alt={ product.title } className='rounded-[25px] hover:cursor-pointer' />
            <div className="product-info flex justify-between items-center p-2">
                <div>
                    <p className='font-bold'>${ product.price }</p>
                    <p className='font-light'>{ product.title }</p>
                </div>
                <figure className='flex items-center justify-center' onClick={() => setCart(!cart)} >
                    <img style={{ display: cart ? 'block' : 'none' }} src={ Add } alt="Add to cart" className='hover:cursor-pointer' />
                    <img style={{ display: cart ? 'none' : 'block' }} src={ Added } alt="Add to cart" className='hover:cursor-pointer' />
                </figure>
            </div>
        </div>
    );
}

export default ProductCard;