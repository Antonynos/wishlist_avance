import React from 'react';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Wishlist from './components/Wishlist/Wishlist';
import Provider from './context/Provider';


function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Wishlist />
    </Provider>

  );
}

export default App;
