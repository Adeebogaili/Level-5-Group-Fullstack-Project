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

  // set context
  const cart = useContext(CartContext);

  //show how many items in cart 
  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  useEffect(() => {
    apiCall("essentials", setEssentials)
    apiCall("groceries", setGroceries)
    apiCall("kitchen", setKitchenState)
  }, [])

  function apiCall (url, setState) {
    axios
      .get(`/${url}`)
      .then((res) => 
      res.data.map((item) => {
        cart.items.map((product) => {
          if (item._id === product.id) {
            setState((prevItems) => {
              return [
                ...prevItems, item
              ]
            })
          }
        })
      }))
    .catch((err) => console.error(err));
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">

      {groceries.map(item => {
        console.log(item._id)
        return(
          <CartItem
            item={item}
            key={item._id}
          />
        )
      })}
        <button>Checkout ({productCount} Items)</button>
      </div>
    </div>
  );
};

export default CartDropdown;