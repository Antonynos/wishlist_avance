import React, {useState, useEffect} from 'react';
import {IoSearchCircle} from 'react-icons/io5'

import './SearchBar.css';

function SearchBar() {
    
    const [posts, setPosts] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    
    const HandleSearch = async (event) =>{
        event.preventDefault();

        await fetch(`http://localhost:8000/api/produtos/${searchValue}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
        
        setSearchValue('');
    }
    
    return (
        <form className='search__bar' onSubmit={HandleSearch}>
            <input
                type='search'
                className='search__input'
                value={searchValue}
                placeholder='Buscar produtos'
                onChange={ ({ target }) => setSearchValue(target.value) }
                required
            />
            <button type='submit' className='search__button'>
                <IoSearchCircle />
            </button>
        </form>    
    );
}

export default SearchBar;
