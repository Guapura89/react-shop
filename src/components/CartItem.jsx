//Images
import close from '@icons/icon_close.png';

const CartItem = () => {
    return (
        <div className="shopping-cart w-full flex items-center my-3">
            <figure>
                <img className="w-20 h-20 object-cover rounded-lg mr-3" src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            </figure>
                <div className="flex justify-between w-4/5 px-2">
                    <p className="text-slate-700">Bike</p>
                    <div className='flex gap-3 items-center'>
                        <p className="font-bold">$30,00</p>
                        <img src={ close } alt="" className='w-[20px] h-[20px] hover:cursor-pointer' />
                    </div>
                    
                </div>
                
        </div>
    );
}

export default CartItem;