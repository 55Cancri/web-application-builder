{/*
This is where all of your SCENES will be loaded on to each route.

Here you will define your app as a class.
This is very important in order to have things working properly in nested components.
*/}

import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../scenes/Home/index.jsx'
import LoginPage from '../scenes/Sign/scenes/Login/index.jsx'
import RegisterPage from '../scenes/Sign/scenes/Register/index.jsx'

import Header from './Header/Header.jsx'


class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    )
  }
}

/*
<Route path="/register" component={RegisterPage} />
*/

export default App


