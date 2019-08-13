import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './components/css/index.scss'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'
import Firebase, { FirebaseContext } from './firebase'
import { withFirebase } from './firebase'
import store from './redux/store'
import { Provider, connect } from 'react-redux'
import { addUser } from './redux/actions'

class AppBase extends Component {
  state = {
    auth: null,
    user: null,
  }
  componentDidMount() {
    this.props.firebase.auth.onAuthStateChanged(auth => {
      this.setState({ auth })
      if (auth) {
        this.getUser()
      } else {
        this.setState({ user: null })
      }
    })
  }
  getUser = () => {
    this.props.firebase
      .database('users/' + this.state.auth.uid)
      .once('value')
      .then(snapshot => {
        this.props.addUser(snapshot.val())
      })
  }
  render() {
    return (
      <HashRouter basename="/">
        <Routes />
      </HashRouter>
    )
  }
}
const AppFirebase = withFirebase(AppBase)
const mapStateToProps = state => ({ ...state.user })
const mapDispatchToProps = { addUser }
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppFirebase)
ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
