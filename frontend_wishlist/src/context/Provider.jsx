import React, { useState } from 'react';
import propTypes from 'prop-types'
import AppContext from './AppContext';

function Provider({ children }) {

    const [isWishlistOpen, setIsWishlistOpen] = useState(false);

    const value = {
        isWishlistOpen, 
        setIsWishlistOpen,
    }

    return( 
        <AppContext.Provider value ={ value }>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;