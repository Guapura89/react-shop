// Images
import menu_logo from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shopping_cart from '@icons/icon_shopping_cart.svg';
import arrow from '@icons/flechita.svg';

import Menu from './Menu';
import { useState } from 'react';

const Header = () => {
    const [userName, setUserName] = useState( 'Carlos Sanchez' );
    const [display, setDisplay] = useState(false);
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
                    <li className="navbar-email flex gap-4 mx-3 relative select-none" onClick={() => setDisplay( !display )}>
                        <p className='hover:text-slate-500 hover:cursor-pointer relative'>
                            { userName }
                        </p>
                        <img src={ arrow } alt="arrow" className='w-[10px] rotate-90 hover:cursor-pointer' />

                        {/* If display hook is true, menu will apear */}
                        { display && <Menu /> }
                    </li>
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