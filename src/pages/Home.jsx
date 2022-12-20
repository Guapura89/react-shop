import Header from "../components/Header";
import Products from "../containers/Products";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home__container w-[80%] mx-auto">
                <div className="flex mb-5 gap-3">
                    <div className="bg-slate-100 px-5 py-2">
                        <i className="fa-solid fa-magnifying-glass opacity-40 m-2 max-[640px]:hidden"></i>
                        <input type="text" className="bg-slate-100 outline-none" placeholder="Search product" />
                    </div>
                    <div className="flex gap-2 items-center">
                        <p className="font-bold">Order:</p>
                        <select name="order" className="bg-transparent" id="">
                            <option value="1">Most recent</option>
                            <option value="2">Most old</option>
                            <option value="3">Popular</option>
                        </select>
                    </div>
                </div>
                <Products />
            </div>
        </div>
    );
}

export default Home;