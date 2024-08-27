import React, { useState, useEffect, useContext } from "react";
import AppContext from '../../context/AppContext';
import WishlistItem from "../WishlistItem/WishlistItem";

import './Wishlist.css'


function Wishlist() {
    const [Wishlist, setWishlist] = useState([]);

    const { isWishlistOpen, setIsWishlistOpen } = useContext(AppContext);
    
    useEffect(() => {
        fetch('http://localhost:8000/api/wishlist_contents/1')
            .then((response) => response.json())
            .then((data) => {
                setWishlist(data);
            }, [])
            .catch((err) => {
                console.log(err.message);
            });
    }, []);
    
    return (
        <section className={`wishlist ${isWishlistOpen ? 'wishlist__open' : ''}`}>
            <div className="wishlist__items">
            { Wishlist.map((item) => <WishlistItem key={item.id} data={item} />) }
            </div>

        </section> 
    );
}

export default Wishlist;