import React from 'react';
import './Products.css';
import ProductDetails from './ProductDetails';

// const productCount = 100;
// const imageUrl = require('./../images/logo192.png');
// const basicStyle = {
//   margin: '10px',
//   padding: '5px',
//   border: '1px solid black',
// };

// function displayProductCount() {
//   return productCount > 0 ? productCount : 'Zero';
// }

function Products(props = {}) {
  // const productAvailability =
  //   props.isAvailable === true ? 'Available' : 'Un-Available';
  // const productbadgeClass =
  //   props.isAvailable === true ? 'badge bg-success' : 'badge bg-danger';

  return (
    <div className="products-div">
      <ul className="list-group shadow">
        <li className="list-group-item">
          <div className="li-div">
            <div className="product-div-child">
              <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
              <p className="font-italic text-muted mb-0 small">
                {props.description}
              </p>
              <ProductDetails
                price={props.price}
                isAvailable={props.isAvailable}
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
      </ul>
    </div>
  );
}

export default Products;
