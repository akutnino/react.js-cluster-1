import React from 'react';
import ProductForm from './ProductForm';

const CreateProduct = (props = {}) => {
  const onCreateProduct = function (products) {
    props.createProduct(products);
  };

  return (
    <div
      className="createProduct-div"
      style={{ backgroundColor: 'white', padding: '10px 20px', margin: '20px' }}
    >
      <div className="form-div">
        <ProductForm createProduct={onCreateProduct}></ProductForm>
      </div>
    </div>
  );
};

export default CreateProduct;
