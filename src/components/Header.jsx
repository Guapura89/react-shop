// Images
import menu_logo from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';

import '../styles/header.css';

const Header = () => {
    return (
        <nav className='flex justify-between w-92 mx-auto px-5'>
            
            <div className="navbar-left flex gap-12 items-center">
                <img src={ logo } alt="logo" className="logo w-[130px]" />

                <ul className='gap-3 hidden sm:flex text-slate-400'>
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

            <div className="navbar-right">
            <ul>
                <li className="navbar-email">platzi@example.com</li>
                <li className="navbar-shopping-cart">
                <img src="./icons/icon_shopping_cart.svg" alt="shopping cart"/ >
                <div>2</div>
                </li>
            </ul>
            </div>
            <img src={ menu_logo } alt="menu" className="menu sm:hidden" />
        </nav>
    );
}

export default Header;