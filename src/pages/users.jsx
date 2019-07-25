import React, { Component } from 'react'
import List from '../components/list'
import axios from 'axios'
class Users extends Component {
  state = {
    users: '',
  }
  componentDidMount() {
    this.getData()
  }
  getData = () => {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then(result => this.setState({ users: result.data.results }))
  }
  render() {
    return (
      <div className="container">
        <button onClick={this.getData}>reload</button>
        <List users={this.state.users} />
      </div>
    )
  }
}

export default Users
