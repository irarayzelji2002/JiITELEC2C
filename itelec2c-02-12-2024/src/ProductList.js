import Product from "./Product";
import { products } from "./data.js";

function ProductList() {
  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mb-4">Our Products</h1>
          </div>

          {products.map((product) => (
            <Product productObj={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
