import React from "react";

function CartList({ cart }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <h4>{cart.article.title}</h4>
      <p>
        Price/quantity
        <span className="ml-3">{cart.article.price}</span>/
        <span>{cart.qunatity}</span>
      </p>
    </li>
  );
}

export default CartList;
