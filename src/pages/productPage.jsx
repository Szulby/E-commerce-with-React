import React, { Component } from 'react'
import Layout from '../components/layout'
import { withFirebase } from '../firebase'
import '../components/css/productPage.scss'
import { connect } from 'react-redux'
import { addCart } from '../redux/actions'
import Helmet from 'react-helmet'
class ProductPageBase extends Component {
  state = {
    id: '',
    name: '',
    description: '',
    url: '',
  }
  componentDidMount() {
    this.props.firebase
      .database(`products/${this.props.match.params.id}`)
      .once('value')
      .then(res => {
        this.setState({
          id: res.key,
          name: res.val().name,
          description: res.val().description,
          url: res.val().url,
        })
      })
  }
  buyFunction = id => {
    if (this.state.id) {
      const { id, name, description, url } = this.state
      this.props.addCart({
        id,
        name,
        description,
        url,
      })
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <Layout>
        <Helmet title={this.state.name} />
        <div className="container">
          <div className="row product-container">
            <div className="col-md-4 picture-container">
              <img src={this.state.url} alt="" />
            </div>
            <div className="col-md-8 description-container">
              <h2>{this.state.name}</h2>
              <p>description:</p>
              <p>{this.state.description}</p>
            </div>
            <button onClick={this.buyFunction}>Buy</button>
          </div>
        </div>
      </Layout>
    )
  }
}
const ProductPageFirebase = withFirebase(ProductPageBase)

const mapStateToProps = state => ({ cart: state.cart })
const mapDispatchToProps = { addCart }
const ProductPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductPageFirebase)
export { ProductPage }
