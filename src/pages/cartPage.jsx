import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeProduct, buyProduct } from '../redux/actions'
import CartsList from '../components/cartsList'
import '../components/css/cartPage.scss'
import Layout from '../components/layout'
class CartPageBase extends Component {
  state = {
    isBought: false,
  }
  removeHandler = id => {
    this.props.removeProduct(id)
  }
  buyHandler = () => {
    if (this.props.cart.length) {
      this.props.buyProduct()
      this.setState({ isBought: true })
      setTimeout(() => {
        this.props.history.push('/')
      }, 5000)
    }
  }
  render() {
    return (
      <Layout>
        <div className="container carts-container">
          <h2>Cart:</h2>
          {this.state.isBought && (
            <div>
              <p>You just bought in our Shop</p>
              <p>You will be redirect to home page in 5s</p>
            </div>
          )}
          {!this.state.isBought && (
            <CartsList
              carts={this.props.cart}
              removeHandler={this.removeHandler}
            />
          )}

          <button className="buy-button" onClick={this.buyHandler}>
            Buy
          </button>
        </div>
      </Layout>
    )
  }
}
const mapStateToProps = state => ({ cart: state.cart })
const mapDispatchToProps = { removeProduct, buyProduct }
const CartPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPageBase)
export default CartPage
