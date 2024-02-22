import React from 'react';
import Products from './Products';

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

const ProductList = (props = {}) => {
  const sampleText = 'and it is awesome';
  console.log(props.newProduct);

  return (
    <div id="appMainDiv">
      <h1 id="main-h1">This is a React Component {sampleText}</h1>
      <p id="main-p">This is a sample paragraph element</p>
      {products.map((product) => {
        return (
          <Products
            id={product.pID}
            name={product.pName}
            description={product.desc}
            isAvailable={product.isAvailable}
            imageUrl={product.image}
            price={product.price}
          ></Products>
        );
      })}
      <button className="btn" type="button">
        Click Me
      </button>
      <input id="textInput" type="text" title="text-input"></input>
    </div>
  );
};

export default ProductList;
