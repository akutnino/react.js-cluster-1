import React from 'react';
import ProductForm from './ProductForm';

const CreateProduct = (props = {}) => {
  return (
    <div
      className="createProduct-div"
      style={{ backgroundColor: 'white', padding: '10px 20px', margin: '20px' }}
    >
      <div className="form-div">
        <ProductForm></ProductForm>
      </div>
    </div>
  );
};

export default CreateProduct;
