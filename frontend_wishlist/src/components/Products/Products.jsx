import React, {useState, useEffect} from "react";

import ProductCard from "../ProductCard/ProductCard";

import './Products.css';

function Products() {
    
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8000/api/produtos')
            .then((response) => response.json())
            .then((data) => {
                setProdutos(data);
            }, [])
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    
    
    return (
        <section className="products">
            {produtos.map((produto) => <ProductCard key = {produto.id} data = {produto} />)}  
        </section>
    );
}

export default Products;