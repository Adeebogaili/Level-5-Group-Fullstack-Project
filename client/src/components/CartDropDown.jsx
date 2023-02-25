import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
// import CartItem from './CartItem'
import { CartContext } from '../Context'
import Essentials from '../pages/Essentials';
import "../styles/cartDropDown.css";

const CartDropdown = (props) => {
  const [essentials, setEssentials] = useState([])
  const [kitchenState, setKitchenState] = useState([])
  const [groceries, setGroceries] = useState([]);

  const cart = useContext(CartContext);

  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  // console.log(cart.items)

  //axios calls 
  const getEssentials = () => {
    axios
        .get("/essentials")
        .then(res => setEssentials(res.data))
        .catch(err => console.error(err))
  }

  const getGroceries = () => {
    axios
      .get("/groceries")
      .then((res) => setGroceries(res.data))
      .catch((err) => console.error(err));
  };

  const getKitchen = () => {
    axios
      .get("/kitchen")
      .then(res => setKitchenState(res.data))
      .catch(err => console.error(err))
  }

  
  useEffect(() => {
    getEssentials()
    getGroceries()
    getKitchen()
  }, [])
  
  // console.log(essentials)
  let newEssentials = []
  let newGroceries = []
  let newKitchen = []

  cart.items.map((product, index) => {
    // function findId (theId) {
    //   return theId === product.id
    // }
    // test = essentials.find(findId())

    function maping (theState, newArry) {
      theState.map((item) => {
        if (theState._id === product.id) {
          const itemWithNum = {...item, quantity: product.quantity}
          console.log(product)
          // newGroceries.push(groceries)
          newArry.push(itemWithNum)
          console.log(newArry)
        }
      })
    }

    maping(essentials, newEssentials)
    maping(groceries, newGroceries)
    maping(kitchenState, newKitchen)

  })

  return (
    <div className="cart-dropdown">
      <div className="cart-items">

        {/* {cart.items && cart.items.map && cart.items.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
          </div>
        ))} */}

        {cart.items.map((product, index) => (
          <div key={index}>
            {/* {console.log(product)} */}
            <h3>{product.name}</h3>
          </div>
        ))}

        <button>Checkout ({productCount} Items)</button>
      </div>
    </div>
  );
};

export default CartDropdown;
