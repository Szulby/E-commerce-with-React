import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import './css/footer.scss'
const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="row">
          <div className=" col-md-3">
            <h1>Clothes Shop</h1>
            <p className="icon-paragraph">
              <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
              Street No.12, Newyork 12, MD-123 USA.
            </p>
            <p className="icon-paragraph">
              <FontAwesomeIcon className="icon" icon={faPhone} />
              123-123-123
            </p>
            <p className="icon-paragraph">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
              info@clothesshop.com
            </p>
          </div>
          <div className=" col-md-3">
            <h2>Helpful links</h2>
            <p>Products</p>
            <p>Find a Store</p>
            <p>Features</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
            <p>Press Kit</p>
          </div>
          <div className=" col-md-3">
            <h2>shop</h2>
            <p>About Us</p>
            <p>Career</p>
            <p>Shipping Methods</p>
            <p>Contact</p>
            <p>Support</p>
            <p>Retailer</p>
          </div>
          <div className="col-md-3">
            <h2>my account</h2>
            <p>Login</p>
            <p>My Account</p>
            <p>My Cart</p>
            <p>Wishlist</p>
            <p>Checkout</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
