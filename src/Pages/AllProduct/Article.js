import React from "react";
import { Link } from "react-router-dom";

function Article({ product }) {
  return (
    <div className="col-md-3">
      <Link to={`/product/${product.id}`}>
        <div className="card">
          <div className="card-header">
            <h3>{product.title}</h3>
          </div>
          <div className="card-body">
            <img src={product.thumbnail} alt="" className="img-fluid" />
          </div>
          <div className="card-footer">
            <p>{product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Article;
