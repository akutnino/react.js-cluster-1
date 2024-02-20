import React from 'react';
import Button from './Button';

const basicStyle = {
  margin: '10px',
  padding: '5px',
  border: '1px solid black',
};

function displayProductCount() {
  const productCount = 100;
  return productCount > 0 ? productCount : 'Zero';
}

function ProductDetails(props = {}) {
  const productAvailability =
    props.isAvailable === true ? 'Available' : 'Un-Available';
  const productbadgeClass =
    props.isAvailable === true ? 'badge bg-success' : 'badge bg-danger';

  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2">${props.price}</h6>
      <Button>-</Button>
      <label className="mylabel" style={basicStyle}>
        {displayProductCount()}
      </label>
      <Button>+</Button>
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
