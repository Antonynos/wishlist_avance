import React, {useEffect} from "react";
import {MdOutlinePlaylistRemove} from 'react-icons/md'

import "./WishlistItem.css";

function WishlistItem({data}) {
    const {wishlist_produto_id, foto, nome} = data;

    const RemoveItem = async () =>{
            alert(wishlist_produto_id);
            await fetch(`http://localhost:8000/api/wishlist_produto/${wishlist_produto_id}`, {
                method: 'DELETE',
            }).then((response) => {
            // if (response.status !== 200) {
            //     return;
            // }
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