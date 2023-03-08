import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../CartContext'
import { useParams } from 'react-router-dom'
import "../styles/productDetails.css"

const SalesDetails = () => {

    const [details, setDetails] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    const { id } = useParams()

    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(id)
    const [quantityState, setQuantityState] = useState(productQuantity)

    function increassCart () {
        cart.addOneToCart(id)
        setQuantityState(prevQuantity => prevQuantity + 1)
    }

    function decreassCart () {
        cart.removeOneFromCart(id)
        setQuantityState(prevQuantity => prevQuantity - 1)
    }
  
    const getData = () => {
        axios
        .get(`/sales/${id}`)
        .then(res => {
            setDetails(res.data)
            setIsLoaded(true)
        })
    }

    useEffect(() => {
        window.scrollTo(0,0)
        getData()
    }, [])

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

export default SalesDetails