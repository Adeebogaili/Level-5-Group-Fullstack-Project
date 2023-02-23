import axios from 'axios'
import { useEffect, useState } from 'react'
import AllKitchen from '../components/AllKitchen'
import allKitchen from "../styles/allKitchen.css"

const Kitchen = () => {

  const [kitchenState, setKitchenState] = useState([])

  const getKitchen = () => {
    axios
      .get("/kitchen")
      .then(res => setKitchenState(res.data))
      .catch(err => console.error(err))
  }

  function handleFilter(e){
    if(e.target.value === "reset"){
      getKitchen()
    } else {
        axios
      .get(`/kitchen/search/type?type=${e.target.value}`)
      .then(res => setKitchenState(res.data))
      .catch(err => console.error(err))
    }
  }

  useEffect(() => {
    getKitchen()
  }, [])

  return (
    <div className='kitchen'>
      <div className="filter-wrapper">
      <h3>{`More than ${kitchenState.length} results for "kitchen"`}</h3>
      <div>
      <h4 className="filter-type">Filter by Type</h4>
      <select onChange={handleFilter} className="filter-form">
        <option value="reset">All Kitchen</option>
        <option value="cookware">Cookware</option>
        <option value="bag">Bags</option>
        <option value="soap">Soap</option>
      </select>
      </div>
      </div>
      <div className='kitchen-wrapper'>
      {kitchenState.map(kitchenState => {
        return (
          <AllKitchen 
            key={kitchenState._id}
            name={kitchenState.name}
            description={kitchenState.description}
            details={kitchenState.details}
            newPrice={kitchenState.new_price}
            oldPrice={kitchenState.old_price}
            type={kitchenState.type}
            imgUrl={kitchenState.imgUrl}
            id={kitchenState._id}
          />
        )
      })}
      </div>

    </div>
  )
}

export default Kitchen