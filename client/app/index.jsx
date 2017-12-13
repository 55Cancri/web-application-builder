import React from 'react'
import { render } from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



import LoginPage from './scenes/Sign/scenes/Login/index.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Stuff from './components/Stuff/Stuff.jsx'
import Contact from './components/Contact/Contact.jsx'

import NotFound from './scenes/NotFound/notFound.jsx'

import './styles.sass'

// import '~/node_modules/font-awesome/scss/font-awesome.scss'

render((
  <div className = "wrapper">
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  </div>
), document.getElementById('root'))
