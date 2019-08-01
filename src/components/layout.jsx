import React from 'react'
import Header from './header'
import Newsletter from './newsletter'
import Footer from './footer'
const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    {children}
    <Newsletter />
    <Footer />
  </React.Fragment>
)
export default Layout
