import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import CartDropDown from "../components/CartDropDown";
import CartItem from "../components/CartItem"
import rootLayout from "../styles/rootLayout.css";

const RootLayout = () => {
  const [click, setClick] = useState(false);
  const [hidden, setHidden] = useState(true)

  const toggleHidden = () => setHidden(!hidden) 

  const handleClick = () => setClick((prevClick) => !prevClick);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            Sunrise Food <span>MARKET</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={handleClick}>
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
              <NavLink to="/help" className="nav-links" onClick={handleClick}>
                Help
              </NavLink>
            </li>
            <li className="nav-item">
              <i
                className="fa-solid fa-cart-shopping"
                onClick={() => toggleHidden()}
              ></i>
            </li>
          </ul>
          {hidden ? null : <CartDropDown />}

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default RootLayout;
