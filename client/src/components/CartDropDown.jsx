import React, { useContext } from 'react'
// import CartItem from './CartItem'
import { CartContext } from '../Context'
import "../styles/cartDropDown.css";

const CartDropdown = (props) => {
  const cart = useContext(CartContext);

  const productCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
console.log(cart.items)
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.items && cart.items.map && cart.items.map((product, index) => (
          <div key={index}>
            <h3>{product.name}</h3>
          </div>
        ))}
        <button>Checkout ({productCount} Items)</button>
      </div>
    </div>
  );
};

export default CartDropdown;
