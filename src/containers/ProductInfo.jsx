// Images
import close from '@icons/icon_close.png';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductInfo = (props) => {
    return (
        <aside className="product-detail absolute right-0 top-0 w-1/4 bg-white">
            <div className='absolute top-2 left-2 bg-white w-[40px] h-[40px] rounded-full grid place-items-center'>
                <img src={ close } alt="close" className='w-1/2'/>
            </div>
            <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="rounded-b-2xl" alt="bike" />
            <div className="product-info px-5 pt-4 text-slate-500 h-full flex flex-col justify-between">
                <div>
                    <p className='font-bold text-black'>$35,00</p>
                    <p className='mb-4'>Refrigerartor</p>
                    <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
                </div>
                <button className="primary-button add-to-cart-button bg-[#ACD9B2] flex p-2 my-4 text-white font-bold items-center border-2 border-[#ACD9B2] justify-center gap-2 hover:bg-white hover:text-[#ACD9B2] rounded-lg w-4/5 mx-auto">
                    <img src={ addToCart } alt="add to cart" />
                    Add to cart
                </button>
            </div>
        </aside>
    );
}

export default ProductInfo;