import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
class CartsList extends Component {
  state = {}
  render() {
    return (
      <div>
        {this.props.carts.map((cart, id) => (
          <div key={id} className="row cart">
            <div className="col-3 picture">
              <img src={cart.url} alt="" />
            </div>
            <div className="col-9 text">
              <p>Title: {cart.name}</p>
              <p>Value: {cart.value}</p>
              <button onClick={() => this.props.removeHandler(cart.id)}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default CartsList
