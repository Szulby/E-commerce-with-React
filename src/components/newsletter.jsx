import React, { Component } from 'react'
import './css/newsletter.scss'
class Newsletter extends Component {
  state = {}
  render() {
    return (
      <div className="newsletter">
        <div className="container">
          <div className="container-title">
            <h2>knowledge share</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            </p>
          </div>
          <div className="form-container">
            <form action="">
              <input type="email" placeholder="Enter your email address" />
              <button
                type="submit"
                onClick={e => {
                  e.preventDefault()
                }}
              >
                send me
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsletter
