import React, { Component } from 'react'
import { SignInForm } from '../components/signin'
import SignUpForm from '../components/signup'
import Header from '../components/header'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import '../components/css/login.scss'
class Login extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Header />
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
        <Newsletter />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Login
