import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../firebase'
import { compose } from 'recompose'
const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  error: null,
}
class SignUpFormBase extends Component {
  state = { ...INITIAL_STATE }
  changeHandler = e => {
    let value = e.currentTarget.name
    this.setState({ [value]: e.currentTarget.value })
  }
  submit = e => {
    const { username, email, password } = this.state
    e.preventDefault()
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, password)

      .then(authUser => {
        this.props.firebase.user(authUser.user.uid).set({
          username,
          email,
        })
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }
  render() {
    const { username, email, password } = this.state
    const isValid = !username || !email || !password
    if (this.state.error) {
      const hidden = document.getElementsByClassName('register-hint')
      hidden[0].classList.remove('hidden')
    }
    return (
      <div className="login-form">
        <h2>Register</h2>
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="Name"
              value={this.state.username}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
          </div>
          <button
            disabled={isValid}
            type="submit"
            onClick={this.submit}
            className="form-button"
          >
            Sign Up
          </button>
          <p className="register-hint hidden">
            error message: {this.state.error}
          </p>
        </form>
      </div>
    )
  }
}
const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase)
export default SignUpForm
