import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App.jsx"

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'



import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Stuff from './components/Stuff/Stuff.jsx'
import Contact from './components/Contact/Contact.jsx'

import NotFound from './scenes/NotFound/notFound.jsx'

import './styles.sass'

// import '~/node_modules/font-awesome/scss/font-awesome.scss'

// render((
//   <div className = "wrapper">
//     <Router>
//       <div>
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Home}/>
//           <Route path="/login" component={LoginPage}/>
//           <Route path="/stuff" component={Stuff}/>
//           <Route path="/contact" component={Contact}/>
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   </div>
// ), document.getElementById('root'))

{/*
This is your base setup for all react apps.
App will always be in root of components folder.
*/}
ReactDOM.render((
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>

), document.getElementById('root'))
