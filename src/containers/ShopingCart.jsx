//Images
import flechita from '../assets/icons/flechita.svg';

import CartItem from "../components/CartItem";

const ShopingCart = () => {
    return (
        <aside className="product-detail absolute right-0 top-0 w-[450px] bg-white hidden">
            <div className='w-4/5 mx-auto'>
                <div className="title-container flex gap-4 hover:cursor-pointer">
                    <img src={ flechita } alt="arrow" className='-rotate-180' />
                    <p className="title font-bold">My order</p>
                </div>

                <div className=" my-16">
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                
                <div>
                    <div className="font-bold flex justify-between p-3  bg-slate-100 rounded-lg">
                        <p>Total</p>
                        <p>$ 560.00</p>
                    </div>
                    <button className="primary-button add-to-cart-button bg-[#ACD9B2] flex p-2 my-4 text-white font-bold items-center border-2 border-[#ACD9B2] justify-center gap-2 hover:bg-white hover:text-[#ACD9B2] rounded-lg w-4/5 mx-auto">  
                        Checkout
                    </button>
                </div>
            </div>
        </aside>
    );
}

export default ShopingCart;