import React from "react";
import "../styles/allRecipies.css";

const AllRecipies = ({
  name,
  description,
  ingredients,
  instructions,
  type,
  imgUrl,
  id,
}) => {
  return (
    <section className="recipie">
      <img src={imgUrl} alt={name} />
      <button>
        <i className="fa-solid fa-plus"></i> Get Ingredients
      </button>
      {/* <div className="price-wrapper">
        <p className="product-new-price">Now ${newPrice}</p>
        <p className="product-old-price">${oldPrice}</p>
      </div> */}
      <p className="recipie-name">{name}</p>
    </section>
  );
};

export default AllRecipies;
