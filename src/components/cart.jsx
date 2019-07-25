import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './css/main/cart.scss'
class CartProductBase extends Component {
  state = {}
  redirect = id => {
    this.props.history.push(`/product/${id}`)
  }
  render() {
    let { id, name, description, url } = this.props
    return (
      <div
        className="col-lg-3 col-md-4 col-sm-6 cart-product"
        onClick={() => this.redirect(id)}
      >
        <h2>{name}</h2>
        <p>{description.slice(0, 40).concat('...')}</p>
        <img src={url} alt="" />
        <p className="price">
          <span>&#36;</span>99
        </p>
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    )
  }
}

const CartProduct = withRouter(CartProductBase)
export { CartProduct }
