import React from "react";
import "../styles/allRecipes.css";

const AllRecipes = ({
  name,
  description,
  ingredients,
  instructions,
  type,
  imgUrl,
  id,
}) => {
  return (
    <section className="recipe">
      <img src={imgUrl} alt={name} />
      <button>
        <i className="fa-solid fa-plus"></i> Get Ingredients
      </button>
      <p className="recipe-name">{name}</p>
    </section>
  );
};

export default AllRecipes;
