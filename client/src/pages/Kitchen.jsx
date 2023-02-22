import axios from 'axios'
import { useEffect, useState } from 'react'
import AllKitchen from '../components/AllKitchen'
import essential from "../styles/essentials.css"

const Kitchen = () => {

  const [kitchenState, setKitchenState] = useState([])

  const getKitchen = () => {
    axios
      .get("/kitchen")
      .then(res => setKitchenState(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getKitchen()
  }, [])

  return (
    <div className='essentials'>
      <h3>{`More than ${kitchenState.length} results for "essentials"`}</h3>
      <div className='essential-wrapper'>
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