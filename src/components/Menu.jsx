const Menu = () => {
    return (
        <ul>
            <li className='hover:text-slate-500 hover:cursor-pointer my-2'><a href="/my-orders">My orders</a></li>
            <li className='hover:text-slate-500 hover:cursor-pointer my-2'><a href="/"></a>My account</li>
            <hr />
            <li className='hover:text-slate-500 hover:cursor-pointer my-2 text-green-300 mt-4'><a href="/">Sign out</a></li>
        </ul>
    );
}

export default Menu;