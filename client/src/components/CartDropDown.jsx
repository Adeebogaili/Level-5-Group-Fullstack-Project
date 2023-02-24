import React, {useContext} from 'react'
import CartItem from './CartItem'
import {CartContext} from '../context'
import "../styles/cartDropDown.css"

const CartDropdown = (props) => {

  const cart = useContext(CartContext)
  
  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CartItem />
        <button>Checkout ({productCount} Items)</button>
      </div>
    </div>
  );
}

export default CartDropdown