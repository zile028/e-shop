import React, { useContext } from "react";
import { ProductsContext } from "../../App";
import Article from "./Article";

function Home() {
  const allProduct = [...useContext(ProductsContext)];
  allProduct.splice(4, 26);

  const topProduct = allProduct.map((product, index) => {
    return <Article product={product} key={index} />;
  });

  return (
    <div className="jumbotron text-center">
      <h1>Top Product</h1>
      <div className="container">
        <div className="row">{topProduct}</div>
      </div>
    </div>
  );
}

export default Home;
