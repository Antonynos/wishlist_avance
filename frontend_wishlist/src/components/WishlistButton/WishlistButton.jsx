import React, { useContext } from "react";
import AppContext from '../../context/AppContext';


import {FaThList} from "react-icons/fa"

import './WishlistButton.css';

function WishlistButton() {

    const { isWishlistOpen, setIsWishlistOpen } = useContext(AppContext);
    
    return (
        <button 
        type='button' 
        className='wishlist__button'
        onClick={() => setIsWishlistOpen(!isWishlistOpen)}
        >
            <FaThList />
        </button>
    );
}

export default WishlistButton;