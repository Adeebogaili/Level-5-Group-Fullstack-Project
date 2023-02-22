import axios from "axios";
import React, { useEffect, useState } from "react";
import AllRecipies from "../components/AllRecipies";
import recipes from "../styles/recipies.css";

const Recipies = () => {
  const [recipies, setRecipies] = useState([]);

  const getRecipies = () => {
    axios
      .get("/recipies")
      .then((res) => setRecipies(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getRecipies();
  }, []);

  return (
    <div className="recipies">
      <h3>{`More than ${recipies.length} results for "recipies"`}</h3>
      <div className="recipie-wrapper">
        {recipies.map((recipie) => {
          return (
            <AllRecipies
              key={recipie._id}
              name={recipie.name}
              description={recipie.description}
              ingredients={recipie.details}
              instructions={recipie.instructions}
              type={recipie.type}
              imgUrl={recipie.imgUrl}
              id={recipie._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Recipies;
