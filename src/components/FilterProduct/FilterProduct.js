import React from 'react';
import './FilterProduct.css';

const FilterProduct = function (props = {}) {
  return (
    <div className="filter-area-div">
      <select name="isAvailable">
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
    </div>
  );
};

export default FilterProduct;
