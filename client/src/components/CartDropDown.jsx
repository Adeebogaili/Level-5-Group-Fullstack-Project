import React from 'react'
import CartItem from './CartItem'
import "../styles/cartDropDown.css"

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CartItem />
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default CartDropdown