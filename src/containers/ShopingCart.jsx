import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

//Images
import flechita from '@icons/flechita.svg';
import CartItem from "@components/CartItem";

const ShopingCart = () => {

    const { state } = useContext(AppContext);

    function total() {
        let total = 0;
        state.cart.map((item) => {
            total += item.price;
        });
        return total;
    }
    
    return (
        <aside className="product-detail absolute right-0 top-24 w-[450px] z-10 bg-white">
            <div className='w-4/5 mx-auto'>
                <div className="title-container flex gap-4 hover:cursor-pointer">
                    <img src={ flechita } alt="arrow" className='-rotate-180' />
                    <p className="title font-bold">My order</p>
                </div>

                <div className="my-16">
                    {state.cart.length === 0 ? <p className="text-center">Your cart is empty</p> : state.cart.map((item) => 
                        <CartItem key={item.id} item={item} />
                    ) }
                </div>
                
                <div>
                    <div className="font-bold flex justify-between p-3  bg-slate-100 rounded-lg">
                        <p>Total</p>
                        <p>$ { total() }</p>
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