import React, { Component } from 'react'
import { SignInForm } from '../components/signin'
import SignUpForm from '../components/signup'
import Layout from '../components/layout'
import '../components/css/login.scss'
class Login extends Component {
  state = {}
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="row form-container">
            <div className="col-md-6 login">
              <SignInForm />
            </div>
            <div className="col-md-6">
              <SignUpForm />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Login
