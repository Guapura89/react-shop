import Header from "../components/Header";
import Products from "../containers/Products";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="home__container w-[80%] mx-auto">
                <Products />
            </div>
        </div>
    );
}

export default Home;