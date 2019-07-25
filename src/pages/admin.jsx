import React, { Component } from 'react'
import { withFirebase } from '../firebase'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AdminForm from '../components/adminForm'
import Header from '../components/header'
import '../components/css/admin.scss'
class AdminBase extends Component {
  state = {
    url: '',
    name: '',
    description: '',
  }
  sendProduct = e => {
    e.preventDefault()
    this.props.firebase
      .database('products')
      .push()
      .set({
        url: this.state.url,
        name: this.state.name,
        description: this.state.description,
      })
  }
  changeHandler = e => {
    let name = e.currentTarget.name
    let value = e.currentTarget.value
    this.setState({ [name]: value })
  }
  imageHandler = e => {
    let img = e.currentTarget.files[0]
    let random = Math.floor(Math.random() * 1000)
    let imgName = `${random}${img.name}`

    let child = this.props.firebase
      .storage()
      .child(`${random}${img.name}`)
      .put(img)
    child.on(
      'state_changed',
      snapshot => {},
      error => {
        console.log(error)
      },
      () => {
        this.props.firebase
          .storage(imgName)
          .getDownloadURL()
          .then(url => {
            this.setState({ url })
          })
      }
    )
  }
  isAuth = () => {
    if (!this.props.user) {
      return <p>loading</p>
    } else if (this.props.user.role === 'admin') {
      return (
        <AdminForm
          changeHandler={this.changeHandler}
          name={this.state.name}
          description={this.state.description}
          url={this.state.url}
          sendProduct={this.sendProduct}
          imageHandler={this.imageHandler}
        />
      )
    } else {
      return <Redirect to="/login" />
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">{this.isAuth()}</div>
      </React.Fragment>
    )
  }
}

const AdminFirebase = withFirebase(AdminBase)
const mapStateToProps = state => ({ ...state.user })
const Admin = connect(mapStateToProps)(AdminFirebase)
export { Admin }
