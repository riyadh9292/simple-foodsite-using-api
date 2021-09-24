import React from "react";
import "./Cart.css";
const Cart = props => {
  /* const { selectedFood } = props.selectedFood; */
  return (
    <div className="cart">
      <h1>cart</h1>
      {props.selectedFood.map(select => (
        <h3 key={select.idMeal}>{select.strMeal}</h3>
      ))}
    </div>
  );
};

export default Cart;
