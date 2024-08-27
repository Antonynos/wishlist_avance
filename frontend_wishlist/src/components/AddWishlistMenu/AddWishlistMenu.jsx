import React, {useState, useEffect} from "react";


import './AddWishlistMenu.css';


function AddWishlistMenu() {

    const [wishlists, setWishlists] = useState([]);
    
//     useEffect(()=>{ 
//         fetch('http://localhost:8000/api/wishlist')
//         .then((response) => response.json())
//         .then((data) => {
//             setWishlists(data);
//         })
//         .catch((err) => {
//             console.log(err.message);
//         });
// })
    
    return (
        <section className="wishlist__menu">
                {/* {wishlists.map((wishlist) => <button key={wishlist.id} className="wishlist__button">
                    {wishlist.nome}
                </button>)} */}
        </section>
    );
}

export default AddWishlistMenu;