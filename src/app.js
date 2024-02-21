import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import CreateProduct from './components/CreateProduct/CreateProduct';

function App() {
  return (
    <div>
      <CreateProduct></CreateProduct>
      <ProductList></ProductList>
    </div>
  );
}

export default App;
