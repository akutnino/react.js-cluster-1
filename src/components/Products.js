import './Products.css';

const productCount = 100;
const imageUrl = require('./../images/logo192.png');
const imageStyle = { width: '50px', height: '50px' };
// const localProductStyles = { 'font-size': '25px' };
const isAvailable = 'Un-Available';
const productAvailability =
  isAvailable === 'Available' ? 'Available' : 'Un-Available';

function displayProductCount() {
  return productCount > 0 ? productCount : 'Zero';
}

function Products() {
  return (
    <div id="products-div">
      <h1 id="products-h1">All Available Products</h1>
      <ul id="priducts-ul">
        <li className="products-item" style={{ fontSize: '25px' }}>
          List Item One
        </li>
        <li className="products-item" style={{ fontSize: '25px' }}>
          List Item Two
        </li>
        <li className="products-item" style={{ fontSize: '25px' }}>
          List Item Three
        </li>
      </ul>
      <div>
        <img src={imageUrl} alt="react-logo" style={imageStyle} />
        <button type="button">-</button>
        <label id="product-label"> {displayProductCount()} </label>
        <button type="button">+</button>
        <h3 className={productAvailability}>This Product is: {isAvailable} </h3>
      </div>
    </div>
  );
}

export default Products;
