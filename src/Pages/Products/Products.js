import React, { useContext, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddCartContext, ProductsContext } from "../../App";

function Products() {
  const inptuQuantity = useRef();
  const slugId = parseInt(useParams().id);
  const allProducts = useContext(ProductsContext);
  const addToCart = useContext(AddCartContext);
  const redirect = useNavigate();
  const article = allProducts.find((product) => product.id === slugId);

  useEffect(() => {
    inptuQuantity.current.focus();
  }, []);

  const add = () => {
    addToCart({
      id: slugId,
      article: article,
      qunatity: inptuQuantity.current.value,
    });
    // vrati me nazad
    redirect("/");
  };

  return (
    <div className="container">
      <div className="card">
        <img src={article.thumbnail} alt="" className="card-img-top" />
        <card className="body">
          <h3>Title:{article.title}</h3>
          <p>{article.description}</p>
        </card>
        <div className="card-footer">
          <input
            ref={inptuQuantity}
            type="number"
            min={0}
            max={article.stock}
            placeholder={article.stock}
          />
          <button className="btn btn-primary" onClick={add}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
