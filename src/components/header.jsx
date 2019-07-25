import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUser,
  faShoppingCart,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import './css/header.scss'

class HeaderBase extends Component {
  state = {}
  openMenu = () => {
    let el = document.getElementsByClassName('navigation-menu')
    el[0].classList.toggle('open')
  }
  componentDidMount() {
    if (this.props.cartValue.length > 0) {
      const cartContainer = document.getElementsByClassName('cartContainer')
      cartContainer[0].classList.remove('hidden-cart')
    }
  }
  render() {
    const cartValue = this.props.cartValue.length
    return (
      <header>
        <div className="container header-container">
          <Link to="/">
            <div className="logo">
              <p className="first">
                <span>C</span>LOTHES
              </p>
              <p className="second">
                <span>S</span>HOP
              </p>
            </div>
          </Link>

          <nav className="navigation-menu">
            <Link to="#">PRODUCTS</Link>
            <Link to="#">STORE</Link>
            <Link to="#">DESIGNER</Link>
            <Link to="#">CONTACT</Link>
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
            <Link
              to="/cart"
              className="cartContainer hidden-cart"
              data-after-content={cartValue}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <Link to="/register">
              <FontAwesomeIcon icon={faSearch} />
            </Link>
          </nav>
          <div className="button" onClick={this.openMenu} />
        </div>
      </header>
    )
  }
}
const mapStateToProps = state => ({ cartValue: state.cart })
const Header = connect(mapStateToProps)(HeaderBase)
export default Header
