import React, { Component } from 'react'
import { withFirebase } from '../firebase'
import { connect } from 'react-redux'
import AdminForm from '../components/adminForm'
import Layout from '../components/layout'
import '../components/css/admin.scss'
class AdminBase extends Component {
  constructor(props) {
    super(props)
    this.timer = null
    this.loadingTimer = null
    this.state = {
      url: '',
      name: '',
      description: '',
    }
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
    if (this.timer || this.loadingTimer) {
      clearTimeout(this.timer)
      clearTimeout(this.loadingTimer)
    }
    if (!this.props.user) {
      this.loadingTimer = setTimeout(() => {
        this.props.history.push('/login')
      }, 1000)
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
      this.timer = setTimeout(() => {
        this.props.history.push('/login')
      }, 5000)
      return <p>you have no access here</p>
    }
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <div className="container" style={{ marginBottom: 20 }}>
            {this.isAuth()}
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}

const AdminFirebase = withFirebase(AdminBase)
const mapStateToProps = state => ({ ...state.user })
const Admin = connect(mapStateToProps)(AdminFirebase)
export { Admin }
