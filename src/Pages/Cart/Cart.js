import React from "react";
import CartList from "./CartList";

function Cart({ cart }) {
  let total = 0;
  const allCartArticle = cart.map((el, index) => {
    total += parseFloat(el.article.price) * el.qunatity;
    return <CartList cart={el} key={index} />;
  });

  return (
    <div className="container">
      <ul className="list-group">
        {allCartArticle}
        <li className="list-group-item">{total}</li>
      </ul>
    </div>
  );
}

export default Cart;
