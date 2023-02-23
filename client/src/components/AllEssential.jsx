import React from "react";
import allEssential from "../styles/allEssential.css";
import { Link } from "react-router-dom"

const Essential = ({
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
    <Link to={`/productdetails/${id}`} style={{textDecoration: "none", color: "white"}}>
    <section className="essential-product">
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
    </Link>
  );
};

export default Essential;
