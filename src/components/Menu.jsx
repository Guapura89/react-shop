const Menu = () => {
    return (
        <div className='absolute text-right -bottom-40 right-0 w-auto h-[150px] bg-white font-bold py-3 px-5 shadow-lg z-10'>
            <ul>
                <li className='hover:text-slate-500 hover:cursor-pointer my-2'><a href="/my-orders">My orders</a></li>
                <li className='hover:text-slate-500 hover:cursor-pointer my-2'><a href="/"></a>My account</li>
                <hr />
                <li className='hover:text-slate-500 hover:cursor-pointer my-2 text-green-300 mt-4'><a href="/">Sign out</a></li>
            </ul>
        </div>
        
    );
}

export default Menu;