import React from "react";
import "../styles/allGroceries.css";

const AllGroceries = ({
  name,
  description,
  details,
  newPrice,
  oldPrice,
  type,
  imgUrl,
  id,
}) => {
  return (
    <section className="grocery-product">
      <img src={imgUrl} alt={name} />
      <button>
        <i className="fa-solid fa-plus"></i> Add
      </button>
      <div className="price-wrapper">
        <p className="product-new-price">Now ${newPrice}</p>
        <p className="product-old-price">${oldPrice}</p>
      </div>
      <p className="product-name">{name}</p>
    </section>
  );
};

export default AllGroceries;
