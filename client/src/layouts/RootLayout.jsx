import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import rootLayout from "../styles/rootLayout.css"

const RootLayout = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(prevClick => !prevClick);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            Partial Foods <span>MARKET</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/groceries"
                className="nav-links"
                onClick={handleClick}
              >
                Groceries
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/recipes"
                className="nav-links"
                onClick={handleClick}
              >
                Recipes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/kitchen"
                className="nav-links"
                onClick={handleClick}
              >
                Kitchen
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/essentials"
                className="nav-links"
                onClick={handleClick}
              >
                Essentials
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default RootLayout
