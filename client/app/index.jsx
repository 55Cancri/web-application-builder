import React from 'react'
import { render } from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Stuff from './components/Stuff/Stuff.jsx'
import Contact from './components/Contact/Contact.jsx'

import NotFound from './scenes/NotFound/notFound.jsx'

import './styles.sass'

render((
  <div>
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/stuff" component={Stuff}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  </div>
), document.getElementById('root'))
