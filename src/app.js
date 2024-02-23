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
    stock: 5,
  },
  {
    pID: 2,
    pName: 'Cottage Cheese',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: false,
    image: 'images/cottage-cheese.png',
    price: 10,
    stock: 0,
  },
  {
    pID: 3,
    pName: 'Brocoli',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: true,
    image: 'images/brocoli.png',
    price: 15,
    stock: 5,
  },
  {
    pID: 4,
    pName: 'oranges',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: true,
    image: 'images/oranges.png',
    price: 20,
    stock: 5,
  },
  {
    pID: 5,
    pName: 'Olive oil',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    isAvailable: false,
    image: 'images/olive-oil.png',
    price: 14,
    stock: 0,
  },
];

function App() {
  let [productList, updateProductList] = useState(products);
  let [filterTextValue, updateFilterValue] = useState('all');

  const createProduct = function (product) {
    product.pID = productList.length + 1;
    updateProductList((previousList) => [product, ...previousList]);
  };

  const productFilterValue = function (filterValue) {
    updateFilterValue(filterValue);
  };

  const filteredProductList = productList.filter((product) => {
    if (filterTextValue === 'available') return product.isAvailable === true;
    if (filterTextValue === 'unavailable') return product.isAvailable === false;

    return product;
  });

  return (
    <div className="app-div">
      <CreateProduct createProduct={createProduct}></CreateProduct>
      <FilterProduct productFilterValue={productFilterValue}></FilterProduct>
      <ProductList productList={filteredProductList}></ProductList>
    </div>
  );
}

export default App;
