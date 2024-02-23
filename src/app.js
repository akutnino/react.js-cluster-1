import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import CreateProduct from './components/CreateProduct/CreateProduct';
import FilterProduct from './components/FilterProduct/FilterProduct';

const products = [
  {
    pID: 1,
    pName: 'Fresh Milk',
    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    isAvailable: true,
    image: 'images/fresh-milk.png',
    price: 14,
  },
  {
    pID: 2,
    pName: 'Cottage Cheese',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: false,
    image: 'images/cottage-cheese.png',
    price: 10,
  },
  {
    pID: 3,
    pName: 'Brocoli',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: true,
    image: 'images/brocoli.png',
    price: 15,
  },
  {
    pID: 4,
    pName: 'oranges',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: true,
    image: 'images/oranges.png',
    price: 20,
  },
  {
    pID: 5,
    pName: 'Olive oil',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: false,
    image: 'images/olive-oil.png',
    price: 14,
  },
];

function App() {
  let [productList, updateProductList] = useState(products);
  const createProduct = function (product) {
    product.pID = productList.length + 1;
    updateProductList((previousList) => [product, ...previousList]);
  };

  return (
    <div className="app-div">
      <CreateProduct createProduct={createProduct}></CreateProduct>
      <FilterProduct></FilterProduct>
      <ProductList productList={productList}></ProductList>
    </div>
  );
}

export default App;
