import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import WishlistButton from '../WishlistButton/WishlistButton';

import './Header.css'


function Header() {
    return (
    <header className='header'>
        <div className='container'>
            <SearchBar />
            <WishlistButton />
        </div>
    </header>
    );
}

export default Header;
