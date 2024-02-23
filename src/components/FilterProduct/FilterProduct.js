import React from 'react';
import './FilterProduct.css';

const FilterProduct = function (props = {}) {
  const productListFilter = function (event) {
    const targetValue = event.target.value;
    props.productFilterValue(targetValue);
  };

  return (
    <div className="filter-area-div">
      <select name="isAvailable" onChange={productListFilter}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
    </div>
  );
};

export default FilterProduct;
