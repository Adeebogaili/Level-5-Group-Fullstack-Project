import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import AllGroceries from "../components/AllGroceries";
import "../styles/groceries.css";
import { CartContext } from "../context";

const Groceries = () => {
  const [groceries, setGroceries] = useState([]);

  const cartContext = useContext(CartContext)
    const cartFunctions = cartContext.theFunctions

    const addToCart = () => {
        cartFunctions.addToCart()
        console.log(cartContext.cart)
    }

  const getGroceries = () => {
    axios
      .get("/groceries")
      .then((res) => setGroceries(res.data))
      .catch((err) => console.error(err));
  };

  function handleFilter(e){
    if(e.target.value === "reset"){
      getGroceries()
    } else {
        axios
      .get(`/groceries/search/type?type=${e.target.value}`)
      .then(res => setGroceries(res.data))
      .catch(err => console.error(err))
    }
  }

  useEffect(() => {
    getGroceries();
  }, []);

  return (
    <div className="groceries">
      <div className="filter-wrapper">
      <h3>{`More than ${groceries.length} results for "groceries"`}</h3>
      <div>
      <h4 className="filter-type">Filter by Type</h4>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">All Groceries</option>
        <option value="fruit">Fruits</option>
        <option value="produce">Produce</option>
      </select>
      </div>
      </div>
      <div className="groceries-wrapper">
        {groceries.map((groceries) => {
          return (
            <AllGroceries
              key={groceries._id}
              name={groceries.name}
              description={groceries.description}
              details={groceries.details}
              newPrice={groceries.new_price}
              oldPrice={groceries.old_price}
              type={groceries.type}
              imgUrl={groceries.imgUrl}
              id={groceries._id}
              fullState={groceries}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Groceries;
