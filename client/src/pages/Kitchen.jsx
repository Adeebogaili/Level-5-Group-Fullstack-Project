import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Kitchen = () => {

const [kitchenState, setKitchenState] = useState([])

  function getKitchen () {
    axios
      .get("/kitchen")
      .then(res => setKitchenState(res.data))
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getKitchen()
    console.log(kitchenState)
  }, [])

  return (
    <div>Kitchen</div>
  )
}

export default Kitchen