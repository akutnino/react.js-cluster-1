import React, { useState } from 'react';
import ProductForm from './ProductForm';

const CreateProduct = (props = {}) => {
  let [showForm, updateShowForm] = useState(false);

  const onCreateProduct = function (products) {
    props.createProduct(products);
  };

  const onCreateNewProduct = function (event) {
    updateShowForm(true);
  };

  const onProductSubmitOrCancel = function () {
    updateShowForm(false);
  };

  return (
    <div
      className="createProduct-div"
      style={{ backgroundColor: 'white', padding: '10px 20px', margin: '20px' }}
    >
      {!showForm && (
        <button type="button" onClick={onCreateNewProduct}>
          Create Product
        </button>
      )}
      {showForm && (
        <ProductForm
          createProduct={onCreateProduct}
          onCancel={onProductSubmitOrCancel}
        ></ProductForm>
      )}
    </div>
  );
};

export default CreateProduct;
