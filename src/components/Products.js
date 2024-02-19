import './Products.css';

let productCount = 100;

function displayProductCount() {
  return productCount > 0 ? productCount : 'Zero';
}

function Products() {
  return (
    <div id="products-div">
      <h1 id="products-h1">All Available Products</h1>
      <ul id="priducts-ul">
        <li className="products-item">List Item One</li>
        <li className="products-item">List Item Two</li>
        <li className="products-item">List Item Three</li>
      </ul>
      <div>
        <button type="button">-</button>
        <label id="product-label"> {displayProductCount()} </label>
        <button type="button">+</button>
      </div>
    </div>
  );
}

export default Products;
