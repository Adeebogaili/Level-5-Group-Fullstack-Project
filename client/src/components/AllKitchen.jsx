import React from "react";
import allKitchen from "../styles/allKitchen.css"
import { Link } from "react-router-dom";

const Kitchen = ({name, description, details, newPrice, oldPrice, type, imgUrl, id}) => {
    return(
        <section className='kitchen-product'>
          <Link to={`/kitchendetails/${id}`} style={{textDecoration: "none", color: "white"}}>
            <img src={imgUrl} alt={name} />
          </Link>
        <button><i className="fa-solid fa-plus"></i> Add</button>
        <div className='price-wrapper'>
          <p className='product-new-price'>Now ${newPrice}</p>
          <p className='product-old-price'>${oldPrice}</p>
        </div>
        <p className='product-name'>{name}</p>
      </section>
    )
}

export default Kitchen