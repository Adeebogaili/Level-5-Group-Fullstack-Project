import React from "react";
import "../styles/footer.css";
import logo from "../images/project-logo-1.png";
import carrot from "../images/carrot-background.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <img src={logo} alt="logo" className="logo" />
      <img src={carrot} alt="SVG as an image" className="carrot" />

      <div className="shopping">
        <h2>Shopping</h2>
        <ul>
          <li>Weekly Sales</li>
          <li>Browse Products</li>
          <li>Delivery and Pickup</li>
          <li>Gift Cards</li>
          <li>Recipes</li>
        </ul>
      </div>
      <div className="about">
        <h2>About</h2>
        <ul>
          <li>About Sunrise Food & Home</li>
          <li>Departments</li>
          <li>Careers</li>
          <li>Meet our Staff</li>
        </ul>
      </div>
      <div className="help">
        <h2>Help</h2>
        <ul>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="icons">
        <a href="#">
        <i className="fa fa-facebook-square" aria-hidden="true"></i>
        </a>
        <a href="#">
        <i className="fa fa-twitter-square" aria-hidden="true"></i>
        </a>
        <a href="#">
        <i className="fa fa-github-square" aria-hidden="true"></i>
        </a>
        <a href="#">
        <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
