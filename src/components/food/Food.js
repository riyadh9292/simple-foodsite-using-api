import React from "react";
import "./Food.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHamburger } from "@fortawesome/free-solid-svg-icons";
const Food = props => {
  const element = <FontAwesomeIcon icon={faHamburger} />;
  const { strMeal, strMealThumb, strYoutube, strCategory } = props.food;
  return (
    <div className="single-food-container">
      <div className="">
        <h3>{strMeal}</h3>
        <img src={strMealThumb} alt="" />
      </div>
      <div className="">
        <p>
          Food category: <b>{strCategory}</b>
        </p>

        <button onClick={() => props.foodButtonHandler(props.food)}>
          {element} Add to cart
        </button>
        <p>
          Want to learn more visit this <a href={strYoutube}>link</a>
        </p>
      </div>
    </div>
  );
};

export default Food;
