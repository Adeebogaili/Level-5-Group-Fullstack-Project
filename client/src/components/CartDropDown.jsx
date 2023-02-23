import React from 'react'


const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown">
      this is the cartItems
      {props.children}
    </div>
  )
}

export default CartDropdown