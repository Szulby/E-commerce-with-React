import React, { Component } from 'react'
import { SignInForm } from '../components/signin'
import SignUpForm from '../components/signup'
import Layout from '../components/layout'
import '../components/css/login.scss'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withFirebase } from '../firebase'
import { compose } from 'recompose'
import { removeUser } from '../redux/actions'

const LoginForms = () => (
  <div className="row form-container">
    <div className="col-md-6 login">
      <SignInForm />
    </div>
    <div className="col-md-6">
      <SignUpForm />
    </div>
  </div>
)
class LoginBase extends Component {
  state = {}
  logOut = () => {
    this.props.firebase.doSignOut().then(() => {
      this.props.removeUser()
      this.props.history.push('/')
    })
  }
  render() {
    return (
      <Layout>
        <div className="container main-conteiner">
          {!this.props.user && <LoginForms />}
          {this.props.user && (
            <button
              type="submit"
              onClick={this.logOut}
              className="logout-button"
            >
              Log Out
            </button>
          )}
        </div>
      </Layout>
    )
  }
}
const LoginCompose = compose(
  withRouter,
  withFirebase
)(LoginBase)

const mapStateToProps = state => ({ ...state.user })
const mapDispatchToProps = { removeUser }
const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginCompose)
export default Login
