import axios from "axios";
import React, { useEffect, useState } from "react";
import AllGroceries from "../components/AllGroceries";
import "../styles/groceries.css";

const Groceries = () => {
  const [groceries, setGroceries] = useState([]);

  const getGroceries = () => {
    axios
      .get("/groceries")
      .then((res) => setGroceries(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getGroceries();
  }, []);

  return (
    <div className="groceries">
      <h3>{`More than ${groceries.length} results for "groceries"`}</h3>
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Groceries;
