import React, { Component } from 'react'

class List extends Component {
  state = {}
  renderList = ({ name, picture }) => {
    let { title, first, last } = name
    let thumbnail = picture.thumbnail

    let finalName = `${title} ${first} ${last}`
    return (
      <li key={finalName}>
        <p>{finalName}</p>
        <img src={thumbnail} alt="" />
      </li>
    )
  }
  render() {
    if (this.props.users) {
      return <ul>{this.props.users.map(user => this.renderList(user))}</ul>
    }
    return <p>data loading</p>
  }
}

export default List
