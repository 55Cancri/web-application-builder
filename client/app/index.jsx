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
import { userLoggedIn } from './scenes/Sign/reducer.js'


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

/*
This code checks if the browser already has a token. If so, it stores the token (which itself contains all the information about the user in an object including but limited to email and password) in a const called "user". Then the dispatch method is used, which triggers an action (userLoggedIn) against the store with the const user as a parameter. The code for userLoggedIn can be found in the reducer.js file in the root of the Sign scenes folder (./scenes/Sign/reducer.js) This is the same dispatch method that runs when the user attempts to login through the form page. It stores the form information in an object, and then checks against it, just like it is doing with the token.
*/

if (localStorage.appJWT) {
  const user = { token: localStorage.appJWT }
  store.dispatch(userLoggedIn(user))
}

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>

), document.getElementById('root'))
