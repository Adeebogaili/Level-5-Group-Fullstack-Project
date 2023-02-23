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

  function handleFilter(e){
    if(e.target.value === "reset"){
      getEssentials()
    } else {
        axios
      .get(`/essentials/search/type?type=${e.target.value}`)
      .then(res => setEssentials(res.data))
      .catch(err => console.error(err))
    }
  }

  useEffect(() => {
    getEssentials()
  }, [])

  return (
    <div className='essentials'>
      <div className="filter-wrapper">
      <h3>{`More than ${essentials.length} results for "essentials"`}</h3>
      <div>
      <h4 className="filter-type">Filter by Type</h4>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">All Groceries</option>
        <option value="laundry">Laundry</option>
        <option value="cleaners">Cleaning Supplies</option>
      </select>
      </div>
      </div>
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
            fullState={essential}
          />
        )
      })}
      </div>

    </div>
  )
}

export default Essentials