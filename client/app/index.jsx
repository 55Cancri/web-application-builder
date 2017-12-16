import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// applyMiddleware enables usage of redux-thunk
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// file that combines all reducers
import rootReducer from './components/rootReducer'

import App from "./components/App.jsx"
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Stuff from './components/Stuff/Stuff.jsx'
import Contact from './components/Contact/Contact.jsx'
import NotFound from './scenes/NotFound/notFound.jsx'

import './styles.sass'

// import '~/node_modules/font-awesome/scss/font-awesome.scss'

// begin by creating redux store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

/*
provider is a higher-order component that wraps the app component itself. It enables access to the store from the react application.
*/


/*
This is your base setup for all react apps.
App will always be in root of components folder.
*/
ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>

), document.getElementById('root'))
