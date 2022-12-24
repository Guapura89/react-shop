import Header from "../components/Header";
import Products from "../containers/Products";
import SearchProduct from "../components/SearchProduct";
import ProductInfo from "../components/ProductInfo";


const Home = () => {
    return (
        <div className="relative">
            <div className="home__container w-[80%] mx-auto">
                <SearchProduct/>
                <Products />
                <ProductInfo />
            </div>
        </div>
    );
}

export default Home;