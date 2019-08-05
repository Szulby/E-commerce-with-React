import React, { Component } from 'react'
import { withFirebase } from '../firebase'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import './css/newProduct/newProduct.scss'
class NewProductCartBase extends Component {
  state = {
    products: [],
  }
  componentDidMount() {
    let products = []
    this.props.firebase
      .database('products')
      .limitToLast(4)
      .once('value')
      .then(response => {
        response.forEach(response => {
          products.push({
            name: response.val().name,
            description: response.val().description,
            url: response.val().url,
            key: response.key,
          })
        })
        this.setState({ products })
      })
  }
  redirect = id => {
    this.props.history.push(`/product/${id}`)
  }
  render() {
    return (
      <div className="container">
        <div className="container-title">
          <h2>New arrival</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi totam
            rerum sint temporibus deserunt quis maiores dolorum! Tempore
            adipisci doloribus consequatur delectus labore
          </p>
        </div>
        <div className="row cart-container">
          {this.state.products.map(p => (
            <div
              key={p.key}
              className="col-lg-3 col-md-3 col-sm-6 new-product"
              onClick={() => this.redirect(p.key)}
            >
              <img src={p.url} alt="" />
              <h2>{p.name}</h2>
              <p className="short-description">
                {p.description.slice(0, 40).concat('...')}
              </p>
              <p className="price">
                <span>&#36;</span>99
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
const NewProductCart = compose(
  withRouter,
  withFirebase
)(NewProductCartBase)
export { NewProductCart }
