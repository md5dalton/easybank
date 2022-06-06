import React, { Component, Fragment } from 'react'
import { createRoot } from 'react-dom/client'

import Header from './layout/Header'
// import Main from './layout/Main'

import '../styles/styles.sass'
import SideDrawer from './UI/SideDrawer'
import Main from './layout/Main'

class App extends Component
{
  render() {
    return (
      <Fragment>
        <Header />
        <SideDrawer isOpen={false} />
        <Main />
      </Fragment>
    )
  }
}

const root = createRoot(document.getElementById('app'))
root.render(<App tab="home" />)