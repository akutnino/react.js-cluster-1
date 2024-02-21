import React, { useState } from 'react';

const ProductForm = (props = {}) => {
  let [productName, updateName] = useState('');
  let [productPrice, updatePrice] = useState('');
  let [productDesc, updateDesc] = useState('');
  let [productAvail, updateAvail] = useState(false);
  let [productImage, updateImage] = useState('');

  const nameInputHandler = function (event) {
    const targetValue = event.target.value;
    updateName(targetValue);
  };

  const priceInputHandler = function (event) {
    const targetValue = event.target.value;
    updatePrice(targetValue);
  };

  const descriptionInputHandler = function (event) {
    const targetValue = event.target.value;
    updateDesc(targetValue);
  };

  const availabilityInputHandler = function (event) {
    const targetValue = event.target.checked;
    updateAvail(targetValue);
  };

  const imageInputHandler = function (event) {
    const targetValue = event.target.value;
    updateImage(targetValue);
  };

  const createProductEvent = function (event) {
    event.preventDefault();
    const productObj = {
      pName: productName,
      desc: productDesc,
      isAvailable: Boolean(productAvail),
      image: productImage,
      price: Number(productPrice),
    };

    updateName('');
    updatePrice('');
    updateDesc('');
    updateAvail(false);
    updateImage('');

    props.createProduct(productObj);
  };

  return (
    <form className="row g-3" onSubmit={createProductEvent}>
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          onChange={nameInputHandler}
          value={productName}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          onChange={priceInputHandler}
          value={productPrice}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          onChange={descriptionInputHandler}
          value={productDesc}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          onChange={availabilityInputHandler}
          checked={productAvail}
        />
        <label className="form-check-label" htmlFor="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          onChange={imageInputHandler}
          value={productImage}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
