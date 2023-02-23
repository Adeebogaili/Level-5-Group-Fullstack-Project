import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import productDetails from "../styles/productDetails.css"

const SalesDetails = () => {

    const [details, setDetails] = useState({})
    const { id } = useParams()

    console.log(id)
    const getData = () => {
        axios
            .get(`/sales/${id}`)
            .then(res => setDetails(res.data))
            .catch(error => console.error(error))
    }

    useEffect(() => {
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
                        <button>Add to cart</button>
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