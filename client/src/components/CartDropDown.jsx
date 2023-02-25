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
  
  // new var for mapped products
  let newEssentials = []
  let newGroceries = []
  let newKitchen = []

  //main cart map
  cart.items.map((product, index) => {

    //map function for products 
    // function maping (theState, newArry) {
    //   theState.map((item) => {
    //     if (theState._id === product.id) {
    //       const itemWithNum = {...item, quantity: product.quantity}
    //       // console.log(product)
    //       newArry.push(itemWithNum)
    //       setNum((oldNum) => oldNum + 1)
    //       // console.log(newArry)
    //     }
    //   })
    // }

    
    // function maping (theState, newArry) {
      //   theState.map((item) => {
        //     if (theState._id === product.id) {
          //       const itemWithNum = {...item, quantity: product.quantity}
          //       // console.log(product)
          //       newArry.push(itemWithNum)
          //       setNum((oldNum) => oldNum + 1)
          //       // console.log(newArry)
          //     }
          //   })
          // }
          
          //calling map function for proudocts 

          // maping(essentials, newEssentials)
          // maping(groceries, newGroceries)
          // maping(kitchenState, newKitchen)
        })  

  const getGroceriesNew = () => {
    axios
      .get("/groceries")
      .then((res) => 
      cart.items.map((product) => {
        res.data.map((item) => {
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
              ]
            })
            // console.log(groceries)
          }
        })
      }))
      .catch((err) => console.error(err));
  };

  // useEffect(() => {
  //   // setFilteredEssentials((prevEssential) => {
  //   //   return[...prevEssential, newEssentials]
  //   // })
  //   setFilteredEssentials(newEssentials)
  //   console.log("hello world")
  // }, num)

  // console.log(filteredEssentials)
  // console.log(num)

  return (
    <div className="cart-dropdown">
      <div className="cart-items">

       {essentials.map(() => {
        return (
          <>
          {groceries.map((item) => {
            return (
              <div>{item.new_price}</div>
            )
          })}
            {/* <CartItem 
              arryState={filteredEssentials}
            /> */}
          </>
        )
      })}

        <button>Checkout ({productCount} Items)</button>
      </div>
    </div>
  );
};

export default CartDropdown;

// <CartItem 
//   newArry={newGroceries}
// />
// <CartItem 
//   newArry={newKitchen}
// />