import React, { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../App";
import Article from "./Article";

function AllProducts() {
  const allProduct = useContext(ProductsContext);
  const [products, setProducts] = useState(allProduct);
  const [renderProduct, setRenderProduct] = useState([]);

  useEffect(() => {
    let displayProducts = products.map((product, index) => {
      return <Article product={product} key={index} />;
    });
    setRenderProduct(displayProducts);
  }, [products]);

  useEffect(() => {});

  const searchArticle = (term) => {
    let regex = new RegExp(term, "gi");
    let searched = allProduct.filter((el) => {
      return (
        regex.test(el.title) || regex.test(el.brand) || regex.test(el.category)
      );
    });

    setProducts(searched);
  };

  return (
    <>
      <div className="jumbotron">
        <h1>AllProducts</h1>
        <input
          type="text"
          onInput={(e) => {
            searchArticle(e.target.value);
          }}
        />
      </div>
      <div className="container-fluid">
        {renderProduct.length && <div className="row">{renderProduct}</div>}
      </div>
    </>
  );
}

export default AllProducts;
