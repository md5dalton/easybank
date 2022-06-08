import React, { Component, Fragment } from 'react'
import { createRoot } from 'react-dom/client'

import Main from './layout/Main'
import Header from './layout/Header'
import Footer from './layout/Footer'
import SideDrawer from './UI/SideDrawer'

import '../styles/styles.sass'

class App extends Component
{
  
  state = {
      sideDrawerIsOpen: false
  }

  toggleSideDrawer = () => {
      this.setState(prevState => ({
          sideDrawerIsOpen: !prevState.sideDrawerIsOpen
      }))
  }

  render() {
    return (
      <Fragment>
        <Header sideDrawerIsOpen={this.state.sideDrawerIsOpen} toggleHandler={this.toggleSideDrawer} />
        <SideDrawer isOpen={this.state.sideDrawerIsOpen} toggleHandler={this.toggleSideDrawer} />
        <Main />
        <Footer />
      </Fragment>
    )
  }
}

const root = createRoot(document.getElementById('app'))
root.render(<App tab="home" />)