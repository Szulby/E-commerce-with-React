import React, { Component } from 'react'
import Header from '../components/header'
import Jumbotron from '../components/jumbotron'
import Main from '../components/main'
import { NewProductCart } from '../components/newProductCart'
import Cnowledge from '../components/cnowledge'
import Newsletter from '../components/newsletter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import Footer from '../components/footer'
import '../components/css/app.scss'

class App extends Component {
  state = {
    scrollButton: false,
  }
  componentDidMount() {
    window.onscroll = this.windowScrollControl
  }
  componentWillUnmount() {
    window.onscroll = null
  }

  windowScrollControl = () => {
    let button = document.getElementById('scrollTop')
    if (document.documentElement.scrollTop > window.innerHeight) {
      button.classList.add('show')
    } else {
      button.classList.remove('show')
    }
  }
  scrollToTop = (totalTime, easingPower) => {
    function easeInOut(t, power) {
      if (t < 0.5) {
        return 0.5 * Math.pow(2 * t, power)
      } else {
        return 0.5 * (2 - Math.pow(2 * (1 - t), power))
      }
    }
    var html = document.documentElement
    var body = document.body

    var timeInterval = 1
    var scrollTop = Math.round(body.scrollTop || html.scrollTop)

    var timeLeft = totalTime
    var scrollByPixel = setInterval(function() {
      var percentSpent = (totalTime - timeLeft) / totalTime
      if (timeLeft >= 0) {
        var newScrollTop =
          scrollTop * (1 - easeInOut(percentSpent, easingPower))
        body.scrollTop = newScrollTop
        html.scrollTop = newScrollTop

        timeLeft--
      } else {
        clearInterval(scrollByPixel)
      }
    }, timeInterval)
  }
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <Main />
        <NewProductCart />
        <Cnowledge />
        <Newsletter />
        <Footer />
        <button
          className="scrrol-to-up "
          id="scrollTop"
          onClick={() => this.scrollToTop(300, 3)}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    )
  }
}

export default App
