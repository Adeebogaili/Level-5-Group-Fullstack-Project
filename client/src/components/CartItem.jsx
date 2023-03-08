import { useState, useContext} from 'react'
import { CartContext } from '../CartContext'
import "../styles/cartItem.css"

export default function CartItem(props) {

  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(props.item.id);
  const [quantityState, setQuantityState] = useState(productQuantity) // set initial quantity state to the quantity in the cart

  function increaseCart() {
    cart.addOneToCart(props.item.id);
    setQuantityState((prevQuantity) => prevQuantity + 1);
  }

  function decreaseCart() {
    cart.removeOneFromCart(props.item.id);
    setQuantityState((prevQuantity) => prevQuantity - 1);
  }

  function removeCartItem() {
    cart.deleteFromCart(props.item.id);
    setQuantityState(0);
  }

  return (
    <div className='cart-item-wrapper'>
    <section className="cart-product-details">
      <img src={props.item.imgUrl} alt={props.item.name} />
      <p className="product-name">{props.item.name}</p>
      <p className="product-price">${props.item.new_price}</p>
    </section>
      <div className='add-remove-wrapper'>
        <button onClick={removeCartItem} className='item-remove-button'>Remove</button>
        <div className='operators-wrapper'>
         <i onClick={decreaseCart} className="fa-solid fa-minus"></i>
         <p>{quantityState}</p>
         <i onClick={increaseCart}className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  )
}