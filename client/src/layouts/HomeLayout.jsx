import React from 'react'
import homeLayout from "../styles/homeLayout.css"
import main from "../images/main.jpg"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='image-wrapper'>
        <img className='main-image' src={main}/>
        <div className='sales-details'>
          <h1>Cozy Savings, Incoming</h1>
          <p>Grab a blanket and save on Animal Welfare Certified ground beef as well as pantry favorites from Rao's. Plus, save an extra 10% on sale items with Sunrise Plus.</p>
          <Link to={"/sales"}>
          <button>See all sales</button>
          </Link>
          <p>Valid 2/22 - 2/28/23. U.S. only. Restrictions apply.</p>
        </div>
      </div>
    </div>
  )
}

export default Home