import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@components/ProductCard.jsx';

const Add = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const API = 'https://api.escuelajs.co/api/v1/products';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const response = await axios(API);
        setProducts(response.data);
    }, [])

    const productList = products.map((product) =>
        <Card image={ product.images } title={ product.title } price={ product.price } key={product.id} />
    );

    return (
        <section className="main-container">
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-3">
                { productList }
            </div>
        </section>
    );
}

export default Products;