import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='root-layout'>
        <header>
          <nav>
            <div className='brand-details'>
              <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/08/plumbing-logos.jpg" alt="" />
              <h3>Mike's</h3>
              <h3>Plumbing</h3>
              <p>I want to be your Plumber! <span>Free</span> Estimate - Call Now!</p>
            </div>
            <div className='right-header'>
              <div className='nav-links'>
              <NavLink to="/">Home</NavLink>
                <NavLink to="/groceries">Groceries</NavLink>
                <NavLink to="/kitchen">Kitchen</NavLink>
                <NavLink to="/essentials">Essentials</NavLink>
              </div>
              <div className='contact-number'>
                <h1>512-559-2334</h1>
              </div>
            </div>
          </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
