import React, { Component } from 'react'
import '../assets/css/register.css'
import Header from '../components/header'
import { addUser } from '../redux/actions'
import { connect } from 'react-redux'

class Register extends Component {
  testFunction = () => {
    this.props.addUser('name')
  }
  render() {
    return (
      <div className="container register-container">
        <Header />
        {/* <SignUpForm /> */}
        <button onClick={this.testFunction}>test</button>
      </div>
    )
  }
}
const mapStateToProps = state => ({ user: state })
const mapDispatchToProps = { addUser }
export const registerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
export default Register
