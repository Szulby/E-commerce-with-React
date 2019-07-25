import React, { Component } from 'react'
import './css/jumbotron.scss'
import jumbotron from '../assets/jumbotron.png'
class Jumbotron extends Component {
  state = {}
  render() {
    return (
      <div className="my-jumbotron">
        <div className="container">
          <div className="product">
            <p>The Latest Product from Clothes Shop</p>
            <h2 className="price">
              <span>&#36;</span>99
            </h2>
            <h2 className="product-title">clothes shop</h2>
            <button className="product-button">shop</button>
            <img src={jumbotron} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

export default Jumbotron
