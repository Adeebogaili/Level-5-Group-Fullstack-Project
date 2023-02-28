import React from 'react'
import "../styles/cartItem.css"

export default function CartItem(props) {
  console.log(props)
  return (
    <>
    <section className="cart-product-details">
      <img src={props.item.imgUrl} alt={props.item.name} />
      <p className="product-name">{props.item.name}</p>
      <p className="product-price">Price ${props.item.new_price}</p>
    </section>
    </>
  )
}