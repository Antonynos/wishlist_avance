import React, {useState, useEffect} from "react";
import {LuListPlus} from 'react-icons/lu';

import CallBackendPOST from "../../api/CallBackend";


import './ProductCard.css';
import AddWishlistMenu from "../AddWishlistMenu/AddWishlistMenu";


function ProductCard({data}) {
    const {id, nome, foto} = data;
    //const [isOpen, setIsOpen] = useState(false);

        // useEffect(()=>{ 
        //     setWishlists(CallBackendGET('wishlist'));
        // }, [isOpen == true])
        // console.log(wishlists);

    // const ShowWishlist = () =>{
    //     setIsOpen(!isOpen);
    // }

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
            .then((response) => response.json())
            .then((data) => {})
            .catch((err) => {
                console.log(err.message);
            });
        }
    
    return (
        <section className="product__card">
            <img 
                src={foto}
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