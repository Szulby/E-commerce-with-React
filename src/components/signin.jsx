import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../firebase'
import { compose } from 'recompose'
const initalState = {
  email: '',
  password: '',
  error: null,
  authUser: null,
  showError: false,
}
class SignInFormBase extends Component {
  state = { ...initalState }
  changeHandler = e => {
    const name = e.currentTarget.name
    this.setState({ [name]: e.currentTarget.value })
  }
  submit = e => {
    const { email, password } = this.state

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...initalState })
        this.props.history.goBack()
      })
      .catch(error => {
        this.setState({ error: error.message, showError: true })
      })
    e.preventDefault()
  }
  render() {
    const { email, password, error, showError } = this.state
    const isValid = !email || !password
    return (
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.changeHandler}
            />
          </div>
          <button
            disabled={isValid}
            type="submit"
            onClick={this.submit}
            className="form-button"
          >
            Sign In
          </button>

          <p className={!showError ? 'hidden' : undefined}>
            error message: {error}
          </p>
        </form>
      </div>
    )
  }
}
const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase)
export { SignInForm }
