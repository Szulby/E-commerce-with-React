import React, { Component } from 'react'
import { withFirebase } from '../firebase'
import './css/main/main.scss'
import { CartProduct } from './cart'
class MainBase extends Component {
  state = {
    products: [],
  }
  componentDidMount() {
    let products = []
    this.props.firebase
      .database('products')
      .limitToLast(8)
      .once('value')
      .then(response => {
        response.forEach(item => {
          var val = {
            name: item.val().name,
            description: item.val().description,
            key: item.key,
            url: item.val().url,
            id: item.key,
          }
          products.push(val)
        })
        this.setState({ products: products })
      })
  }
  render() {
    return (
      <main>
        <div className="container-fluid">
          <div className="container-title">
            <h2>Popular arrival</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              totam rerum sint temporibus deserunt quis maiores dolorum! Tempore
              adipisci doloribus consequatur delectus labore
            </p>
          </div>
          <div className="row cart-container">
            {this.state.products.map(p => (
              <CartProduct
                key={p.key}
                name={p.name}
                description={p.description}
                url={p.url}
                id={p.id}
              />
            ))}
          </div>
        </div>
      </main>
    )
  }
}
const Main = withFirebase(MainBase)
export default Main
