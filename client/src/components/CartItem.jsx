import { useState, useContext} from 'react'
import { CartContext } from '../Context'
import "../styles/cartItem.css"

export default function CartItem(props) {

  const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(props.item.id)
    console.log(`${productQuantity} whattt`)
    const [quantityState, setQuantityState] = useState(1)

    function increassCart () {
        cart.addOneToCart(props.item.id)
        setQuantityState(prevQuantity => prevQuantity + 1)
    }

    function decreassCart () {
        cart.removeOneFromCart(props.item.id)
        setQuantityState(prevQuantity => prevQuantity - 1)
    }
  return (
    <div className='cart-item-wrapper'>
    <section className="cart-product-details">
      <img src={props.item.imgUrl} alt={props.item.name} />
      <p className="product-name">{props.item.name}</p>
      <p className="product-price">${props.item.new_price}</p>
    </section>
      <div className='add-remove-wrapper'>
        <button className='item-remove-button'>Remove</button>
        <div className='operators-wrapper'>
         <i onClick={decreassCart} className="fa-solid fa-minus"></i>
         <p>{quantityState}</p>
         <i onClick={increassCart}className="fa-solid fa-plus"></i>
        </div>
      </div>
    </div>
  )
}