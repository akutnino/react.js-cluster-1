import React, { useState } from 'react';
import Button from './Button';

const basicStyle = {
  margin: '10px',
  padding: '5px',
  border: '1px solid black',
};

// function onMouseOverFunc(event) {
//   console.log(event);
// }

function ProductDetails(props = {}) {
  const productAvailability =
    props.isAvailable === true ? 'Available' : 'Un-Available';
  const productbadgeClass =
    props.isAvailable === true ? 'badge bg-success' : 'badge bg-danger';

  // let productCount = 0;
  let [productCount, updateCount] = useState(0);

  function displayProductCount() {
    return productCount > 0 ? productCount : 'Zero';
  }

  function incrementProductCount() {
    // productCount += 1;
    // console.log(productCount);
    updateCount((productCount += 1));
  }

  function decrementProductCount() {
    // productCount -= 1;
    // console.log(productCount);
    updateCount((productCount -= 1));
  }

  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2">${props.price}</h6>
      <Button clickHandler={decrementProductCount}>-</Button>
      <label className="mylabel" style={basicStyle}>
        {displayProductCount()}
      </label>
      <Button clickHandler={incrementProductCount}>+</Button>
      <label className={productbadgeClass} style={basicStyle}>
        {productAvailability}
      </label>
    </div>
  );

  // return React.createElement('div', {className: 'd-flex align-items-center justify-content-start mt-1'},
  //         React.createElement('h6', {className: 'font-weight-bold my-2'}, `$${props.price}`),
  //         React.createElement(Button, {}, '-'),
  //         React.createElement('label', {className: 'mylabel', style: basicStyle}, displayProductCount()),
  //         React.createElement(Button, {}, '+'),
  //         React.createElement('label', {className: productbadgeClass, style: basicStyle}, productAvailability)
  //     );
}

export default ProductDetails;
