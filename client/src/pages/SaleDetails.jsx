import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import { CartContext } from '../Context'
import { useParams } from 'react-router-dom'
import "../styles/productDetails.css"

const SalesDetails = () => {

    const [details, setDetails] = useState({})
    const { id } = useParams()

    const cart = useContext(CartContext)
    const productQuantity = cart.getProductQuantity(id)
  
    console.log(id)
    const getData = () => {
        axios
            .get(`/sales/${id}`)
            .then(res => setDetails(res.data))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        window.scrollTo(0,0)
        getData()
    }, [])

    return (
        <div className="details-container">
            <div className='details-wrapper'>
                <section className='section-wrapper'>
                    <img src={details.imgUrl} alt={details.name} />
                    <div className="section-details">
                        <h3>{details.name}</h3>
                    <div className='section-add'>
                        <p>${details.new_price}</p>
                        <button onClick={() => cart.addOneToCart(id)}>Add to cart</button>
                    </div>
                    </div>
                </section>
                <section className='description-section'>
                    <h3>Product description</h3>
                    <p>{details.description}</p>
                    <div className="product-details">
                        {
                            details && details.details
                                ?
                                details.details.map(detail => (

                                    <><ul><li>{detail}</li></ul></>
                                ))
                                :
                                ""
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SalesDetails