import React from 'react';
import Products from './Products';

const ProductList = (props = {}) => {
  const sampleText = 'and it is awesome';
  const productListArray = props.productList.map((product) => {
    return (
      <Products
        key={product.pID}
        id={product.pID}
        name={product.pName}
        description={product.desc}
        isAvailable={product.isAvailable}
        imageUrl={product.image}
        price={product.price}
      ></Products>
    );
  });

  return (
    <div id="appMainDiv">
      <h1 id="main-h1">This is a React Component {sampleText}</h1>
      <p id="main-p">This is a sample paragraph element</p>
      {productListArray}
      <button className="btn" type="button">
        Click Me
      </button>
      <input id="textInput" type="text" title="text-input"></input>
    </div>
  );
};

export default ProductList;
