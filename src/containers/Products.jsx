// Cards
import Card from '../components/ProductCard.jsx';


const Products = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const listItems = numbers.map((numbers) =>
        <Card key={numbers}/>
    );
    return (
        <section className="main-container">
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                { listItems }
            </div>
        </section>
    );
}

export default Products;