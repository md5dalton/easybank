import React, { Component, Fragment } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './layout/Header'

import '../styles/styles.sass'
import SideDrawer from './UI/SideDrawer'
import Main from './layout/Main'
import Footer from './layout/Footer'

class App extends Component
{
  render() {
    return (
      <Fragment>
        <Header />
        <SideDrawer isOpen={false} />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

const root = createRoot(document.getElementById('app'))
root.render(<App tab="home" />)