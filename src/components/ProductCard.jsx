// Images
import Add from '../assets/icons/bt_add_to_cart.svg';
const product = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';


import Header from './Header';

const ProductCard = () => {
    return (
        <div className="product-card">
            <img src={ product } alt="Product image" className='rounded-[25px]' />
            <div className="product-info flex justify-between items-center p-2">
                <div>
                    <p className='font-bold'>$120,00</p>
                    <p className='font-light'>Bike</p>
                </div>
                <figure>
                    <img src={ Add } alt="Add to cart" className='hover:cursor-pointer' />
                </figure>
            </div>
        </div>
    );
}

export default ProductCard;