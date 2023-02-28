import React from 'react'

export default function CartItem (props) {
  console.log(props)
  return (
    <section className="essential-product">
         <img src={props.item.imgUrl} alt={props.item.name} />
    <div className="price-wrapper">
      <p className="product-new-price">Price ${props.item.new_price}</p>
    </div>
    <p className="product-name">{props.item.name}</p>
  </section>
  )
}