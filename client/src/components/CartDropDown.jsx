import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import CartItem from './CartItem'
import { CartContext } from '../Context'
import Essentials from '../pages/Essentials';
import "../styles/cartDropDown.css";

const CartDropdown = (props) => {

  //set state 
  const [essentials, setEssentials] = useState([])
  const [kitchenState, setKitchenState] = useState([])
  const [groceries, setGroceries] = useState([]);
  const [filteredEssentials, setFilteredEssentials] = useState([])
  const [filteredKitchen, setFilteredKitchen] = useState([])
  const [filteredGroceries, setFilteredGroceries] = useState([])
  const [num, setNum] = useState([0]);

  // set context
  const cart = useContext(CartContext);

  //show how many items in cart 
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  //axios calls 
  const getEssentials = () => {
    axios
        .get("/essentials")
        .then(res => setEssentials(res.data))
        .catch(err => console.error(err))
  }

  // const getGroceries = () => {
  //   axios
  //     .get("/groceries")
  //     .then((res) => setGroceries(res.data))
  //     .catch((err) => console.error(err));
  // };

  const getKitchen = () => {
    axios
      .get("/kitchen")
      .then(res => setKitchenState(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getEssentials()
    // getGroceries()
    getKitchen()
    getGroceriesNew()
  }, [])


  //main cart map
  cart.items.map((product, index) => {
  })  

  const getGroceriesNew = () => {
    axios
      .get("/groceries")
      .then((res) => 
      res.data.map((item) => {
      cart.items.map((product) => {
          // console.log(res.data)
          // console.log(item._id)
          // console.log(product.id)

          if (item._id === product.id) {
            // console.log(item)
            // setGroceries(item)
            setGroceries((prevItems) => {
              // console.log(item)
              // console.log(prevItems)
              return [
                ...prevItems, item
                // item
              ]
            })
            // console.log(groceries)
          }
        })
      }))
      .catch((err) => console.error(err));
  };

  // console.log(groceries)
  // console.log(groceries[0])
  // console.log(groceries[0].name)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">

      {groceries.map(item => {
        return(
          <>
            <h5>{item.name}</h5>
          </>
        )
      })}

        <button>Checkout ({productCount} Items)</button>
      </div>
    </div>
  );
};

export default CartDropdown;