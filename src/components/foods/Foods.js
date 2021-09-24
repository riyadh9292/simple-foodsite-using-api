import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Food from "../food/Food";
import "./Foods.css";
const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState([]);
  const [search, setSearch] = useState("");
  /*   useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then(res => res.json())
      .then(data => {
        setFoods(data.meals);
      });
  }, []); */
  useEffect(() => {
    fetch(`https:www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setFoods(
          data.meals
            ? data.meals
            : [
                {
                  idMeal: 1,
                  strMeal: "no meal found",
                  strMealThumb: "no image found",
                  strYoutube: "none",
                  strCategory: "none"
                }
              ]
        );
      });
  }, [search]);
  const foodButtonHandler = food => {
    setSelectedFood(prevState => {
      return [...prevState, food];
    });
  };
  const searchHandler = e => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="search-container">
        <input
          onChange={searchHandler}
          type="text"
          placeholder="enter your favourite food name here"
        />
      </div>
      <div className="foods">
        {foods.map(food => (
          <Food
            key={food.idMeal}
            food={food}
            foodButtonHandler={foodButtonHandler}
          />
        ))}
      </div>
      <Cart selectedFood={selectedFood} />
    </>
  );
};

export default Foods;
