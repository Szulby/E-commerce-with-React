import React, { Component } from 'react'
import { withFirebase } from '../firebase'
class LogOutBase extends Component {
  state = {}
  render() {
    return <button onClick={this.props.firebase.doSignOut}>logout</button>
  }
}
const LogOut = withFirebase(LogOutBase)
export { LogOut }
