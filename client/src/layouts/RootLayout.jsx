import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import rootLayout from "../styles/rootLayout.css"

const RootLayout = () => {

  const [mobile, setMobile] = useState(false)

  return (
    <div className='root-layout'>
      <header>
        <div className='container flexSB'>
                <div className='logo flexSB'>
                  
                </div>
            <nav className='flexSB'>
                <ul className={mobile ? "navMenu-list" : 'flexSB'} onClick={() => setMobile(false)}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/groceries">Groceries</NavLink>
                <NavLink to="/kitchen">Kitchen</NavLink>
                <NavLink to="/essentials">Essentials</NavLink>
                </ul>
                <button className='toggle' onClick={() => setMobile(prevMobile => !prevMobile)}>
                    {mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                </button>
            </nav>
            
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
