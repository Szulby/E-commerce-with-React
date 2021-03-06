import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import App from './pages/App'
import Login from './pages/login'
import { Admin } from './pages/admin'
import { ProductPage } from './pages/productPage'
import CartPage from './pages/cartPage'
class Routes extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/admin" component={Admin} />
      </React.Fragment>
    )
  }
}

export default Routes
