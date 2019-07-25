import React from 'react'

const FirebaseContext = React.createContext(null)
const AuthUserContext = React.createContext(null)
export { FirebaseContext, AuthUserContext }
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
)
