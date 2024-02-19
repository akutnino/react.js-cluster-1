import './Products.css';

const productCount = 100;
// const imageUrl = require('./../images/logo192.png');
const basicStyle = {
  margin: '10px',
  padding: '5px',
  border: '1px solid black',
};

function displayProductCount() {
  return productCount > 0 ? productCount : 'Zero';
}

function Products(props = {}) {
  const productAvailability =
    props.isAvailable === true ? 'Available' : 'Un-Available';
  const productbadgeClass =
    props.isAvailable === true ? 'badge bg-success' : 'badge bg-danger';

  return (
    <div id="products-div">
      <ul className="list-group shadow">
        <li className="list-group-item">
          <div className="li-div">
            <div className="product-div-child">
              <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
              <p className="font-italic text-muted mb-0 small">
                {props.description}
              </p>
              <div className="d-flex align-items-center justify-content-start mt-1">
                <h6 className="font-weight-bold my-2">${props.price}</h6>
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
              src={props.imageUrl}
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
