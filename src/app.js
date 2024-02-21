import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import CreateProduct from './components/CreateProduct/CreateProduct';

function App() {
  let [newProduct, updateProduct] = useState(null);

  const createProduct = function (product) {
    updateProduct(product);
  };

  return (
    <div>
      <CreateProduct createProduct={createProduct}></CreateProduct>
      <ProductList newProduct={newProduct}></ProductList>
    </div>
  );
}

export default App;
