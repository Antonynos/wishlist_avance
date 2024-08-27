import React, {useState, useEffect, useContext} from "react";
import {LuListPlus} from 'react-icons/lu';

import CallBackendPOST from "../../api/CallBackend";
import AppContext from '../../context/AppContext';


import './ProductCard.css';
import AddWishlistMenu from "../AddWishlistMenu/AddWishlistMenu";


function ProductCard({data}) {
    const {id, nome, foto} = data;
    const { isChange, setIsChange} = useContext(AppContext);

    const addWishlist = async () =>{
            
        await fetch('http://localhost:8000/api/wishlist_produto', {
            method: 'POST',
            body: JSON.stringify({
                wishlist_id: 1,
                produtos_id: id,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json(), setIsChange(!isChange))
            .then((data) => {})
            .catch((err) => {
                console.log(err.message);
            });
        }
    
    return (
        <section className="product__card">
            <img 
                src={foto}
                onError='https://lightwidget.com/wp-content/uploads/localhost-file-not-found-480x480.avif'
                alt="product"
                className="product__image"
            />
            <div className="product__info">
                <h2 className='product__title'>{nome}</h2>
            </div>

            <button
                type="button"
                className="button__add-wishlist"
                //onClick={ShowWishlist}
                onClick={addWishlist}
            >
                <LuListPlus />
            </button>

            {/* <div>
            {isOpen === true ? <AddWishlistMenu /> : ''}
            </div> */}
            
        </section>
    );
}

export default ProductCard;