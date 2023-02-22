import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AllEssential from '../components/AllEssential'
import essential from "../styles/essentials.css"

const Essentials = () => {

  const [essentials, setEssentials] = useState([])

  const getEssentials = () => {
    axios
        .get("/essentials")
        .then(res => setEssentials(res.data))
        .catch(err => console.error(err))
  }

  useEffect(() => {
    getEssentials()
  }, [])

  return (
    <div className='essentials'>
      <h3>{`More than ${essentials.length} results for "essentials"`}</h3>
      <div className='essential-wrapper'>
      {essentials.map(essential => {
        return (
          <AllEssential 
            key={essential._id}
            name={essential.name}
            description={essential.description}
            details={essential.details}
            newPrice={essential.new_price}
            oldPrice={essential.old_price}
            type={essential.type}
            imgUrl={essential.imgUrl}
            id={essential._id}
          />
        )
      })}
      </div>

    </div>
  )
}

export default Essentials