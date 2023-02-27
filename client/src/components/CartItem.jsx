import React from 'react'
import {CartProvider} from "../Context"

export default function CartItem (props) {
  return (
    <div className='cart-item'>{props.item.name}</div>
  )
}