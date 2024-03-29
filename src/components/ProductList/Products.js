import React from 'react';
import './Products.css';
import ProductDetails from './ProductDetails';

function Products(props = {}) {
  return (
    <li
      className="list-group-item"
      style={{
        margin: '15px',
        backgroundColor: props.isAvailable ? 'white' : '#dedede',
      }}
    >
      <div className="li-div">
        <div className="product-div-child">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <p className="font-italic text-muted mb-0 small">
            {props.description}
          </p>
          <ProductDetails
            price={props.price}
            isAvailable={props.isAvailable}
            stock={props.stock}
          />
        </div>
        <img
          src={props.imageUrl}
          alt="Generic Placeholder"
          width="200"
          className="product-image"
        />
      </div>
    </li>
  );
}

export default Products;
