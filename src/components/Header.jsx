// Images
import menu_logo from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import shopping_cart from '../assets/icons/icon_shopping_cart.svg';

import { useState } from 'react';

const Header = () => {
    const [userName, setUserName] = useState('carlos@platzi.com');
    const [hi, setHi] = useState('txttxtxt');
    return (
        <nav className='flex justify-between w-92 mx-auto px-8 h-[100px] min-w-[280px] 2xl:w-[80%]'>
            
            <div className="navbar-left flex gap-12 items-center">
                <img src={ logo } alt="logo" className="logo w-[130px]" />

                <ul className='gap-3 max-[820px]:hidden flex text-slate-400'>
                    <li >
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right items-center flex max-[640px]:hidden">
                <ul className='flex gap-3'>
                    <li className="navbar-email hover:text-slate-500 hover:cursor-pointer" onClick={() => setUserName('Hello')}>{ userName } { hi }</li>
                    <li className="navbar-shopping-cart">
                        <div className='relative'>
                            <img src={ shopping_cart } alt="shopping cart relative" className='hover:cursor-pointer' />
                            <div className='absolute -top-2 -right-1 bg-green-300 animate-ping rounded-full p-2 w-2 h-2'></div>
                            <div className='absolute -top-2 -right-1 bg-green-300 rounded-full p-2 w-2 h-2'></div>
                        </div>
                        
                    </li>
                </ul>
            </div>
            <img src={ menu_logo } alt="menu" className="menu sm:hidden w-[30px] active:bg-slate-200 hover:cursor-pointer" />
        </nav>
    );
}

export default Header;