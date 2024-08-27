import React, {useEffect, useContext} from "react";
import {MdOutlinePlaylistRemove} from 'react-icons/md'
import AppContext from '../../context/AppContext';

import "./WishlistItem.css";

function WishlistItem({data}) {
    const {id, foto, nome} = data;

    const { isChange, setIsChange} = useContext(AppContext);

    const RemoveItem = async () =>{
            await fetch(`http://localhost:8000/api/wishlist_produto/${id}`, {
                method: 'DELETE',
            }).then((response) => {
            // if (response.status !== 200) {
            //     return;
            // }
            setIsChange(!isChange);
        });
    }

    return(
    <section className="wishlist__item">
        <img
            src = {foto}
            alt = 'imagem do produto' 
            className='wishlist__item-image'
        >
        </img>

        <div className="wishlist__item-image-content">
                <h3 className="wishlist__item-title">{nome}</h3>
                <button
                type="button"
                className="button__remove-item"
                onClick={RemoveItem}
                >
                    <MdOutlinePlaylistRemove />
                </button>
        </div>

    </section>
    );
}

export default WishlistItem;