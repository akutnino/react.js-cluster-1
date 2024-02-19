import './Products.css';

const productCount = 100;
const imageUrl = require('./../images/logo192.png');
const basicStyle = {
  margin: '10px',
  padding: '5px',
  border: '1px solid black',
};
const isAvailable = 'Available';
const productAvailability =
  isAvailable === 'Available' ? 'Available' : 'Un-Available';
const productbadgeClass =
  isAvailable === 'Available' ? 'badge bg-success' : 'badge bg-danger';

function displayProductCount() {
  return productCount > 0 ? productCount : 'Zero';
}

function Products() {
  return (
    <div id="products-div">
      <ul className="list-group shadow">
        <li className="list-group-item">
          <div className="li-div">
            <div className="product-div-child">
              <h5 className="mt-0 font-weight-bold mb-2">Fresh Milk</h5>
              <p className="font-italic text-muted mb-0 small">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit fuga autem maiores necessitatibus.
              </p>
              <div className="d-flex align-items-center justify-content-start mt-1">
                <h6 className="font-weight-bold my-2">$120.00</h6>
                <button className="btn btn-primary">-</button>
                <label className="mylabel" style={basicStyle}>
                  {displayProductCount()}
                </label>
                <button className="btn btn-primary">+</button>
                <label className={productbadgeClass} style={basicStyle}>
                  {productAvailability}
                </label>
              </div>
            </div>
            <img
              src={imageUrl}
              alt="Generic Placeholder"
              width="200"
              className="product-image"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Products;
