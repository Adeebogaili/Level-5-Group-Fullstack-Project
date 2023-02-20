import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='root-layout'>
        <header>
          <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/groceries">Groceries</NavLink>
                <NavLink to="/kitchen">Kitchen</NavLink>
                <NavLink to="/essentials">Essentials</NavLink>
          </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
