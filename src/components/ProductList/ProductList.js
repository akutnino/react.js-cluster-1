import React from 'react';
import Products from './Products';
import './ProductList.css';

const ProductList = (props = {}) => {
  if (props.productList.length === 0) {
    return (
      <div style={{ margin: '0 20px', color: 'white' }}>
        <h3>No Products Available</h3>
      </div>
    );
  }

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
    <div className="products-div">
      <ul className="list-group shadow">{productListArray}</ul>
    </div>
  );
};

export default ProductList;
