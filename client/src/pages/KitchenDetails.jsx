import axios from 'axios'
import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../CartContext'
import useKitchenDetails from '../hooks/useKitchenDetails'
import "../styles/productDetails.css"

const GroceryDetails = () => {

    const { id } = useParams()

    const { details, isLoaded} = useKitchenDetails(id)

    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(id)
    const [quantityState, setQuantityState] = useState(productQuantity)

    function increassCart() {
        cart.addOneToCart(id)
        setQuantityState(prevQuantity => prevQuantity + 1)
    }

    function decreassCart() {
        cart.removeOneFromCart(id)
        setQuantityState(prevQuantity => prevQuantity - 1)
    }

    if (!isLoaded) return <h2>Loading...</h2>

    return (
        <div className="details-container">
            <div className='details-wrapper'>
                <section className='section-wrapper'>
                    <img src={details.imgUrl} alt={details.name} />
                    <div className="section-details">
                        <h3>{details.name}</h3>
                        <div className='section-add'>
                            <p>${details.new_price}</p>
                            {productQuantity > 0 ?
                                <>
                                    <button onClick={increassCart} >+</button>
                                    <h1>{quantityState}</h1>
                                    <button onClick={decreassCart}>-</button>
                                </>
                                :
                                <button onClick={increassCart}>Add to cart</button>
                            }
                        </div>
                    </div>
                </section>
                <section className='description-section'>
                    <h3>Product description</h3>
                    <p>{details.description}</p>
                    <div className="product-details">
                        {
                            details.details.map((detail, index) => (
                                <div key={index}><ul><li>{detail}</li></ul></div>
                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default GroceryDetails