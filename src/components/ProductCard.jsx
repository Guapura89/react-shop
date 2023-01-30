import { useState } from 'react';

// Images
import Add from '@icons/bt_add_to_cart.svg';
import Added from '@icons/bt_added_to_cart.svg';
const alt = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';


const ProductCard = ( props ) => {
    const [cart, setCart] = useState(true);

    function img(){
        if (props.title !== 'string')
            return props.image;
        else
            return alt
    }
    
    return (
        <div className="product-card">
            
            <img src={ img() } alt={ props.title } className='rounded-[25px] hover:cursor-pointer' />
            <div className="product-info flex justify-between items-center p-2">
                <div>
                    <p className='font-bold'>${ props.price }</p>
                    <p className='font-light'>{ props.title }</p>
                </div>
                <figure onClick={() => setCart( !cart )} >
                    <img style={{ display: cart ? 'block' : 'none' }} src={ Add } alt="Add to cart" className='hover:cursor-pointer' />
                    <img style={{ display: cart ? 'none' : 'block' }} src={ Added } alt="Add to cart" className='hover:cursor-pointer' />
                </figure>
            </div>
        </div>
    );
}

export default ProductCard;