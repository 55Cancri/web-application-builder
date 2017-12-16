/* 1. import react */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../reducer'

import LoginForm from './components/Form/LoginForm.jsx'

/*
2. define page component as func expression
· pass submit function to children
*/
class LoginPage extends React.Component {

/*
In the props of this LoginPage component (passed from...?), there will be a login "thunk" action and you pass data to it. It will return a promise and if everything is okay, then it will redirect to home page. It will redirect through the "history", and history is passed to this component from React Router because remember this is the page component, which is wrapped by a route.

Both the login and history (and history.push) methods are outlined below in the proptypes.

login is an action used in the reducer.js file in the root directory in the Sign folder (2 levels up), and defined in the api.js file (2 levels and 1 level down in the components folder)

so, in the LoginForm component, when the submit button is clicked, it calls the submit function in its parent component (this literal file–LoginPage), and the submit function in turn calls the login function that is imported from the reducer file, and it passes the data into as an argument. The login function (USED in reducer.js) is actually defined in api.js. The login function takes "credentials" (from data) as an argument, then makes a post request to the defined route ot the server. It returns a promise that holds the user and the token, and THEN, a normal redux action is dispatched (after data returns from the server) called USER_LOGGED_IN (see reducer.js in root of Sign folder). From there, the user data is placed in the state


rem cheatsheet:
auth = reducer.js
types = actions.js


STEP 1 (redux): When you click submit button, the submit function below is called. A login function is dispatched that is created in the Sign folder, root directory file "reducer.js". In this function, you pass in data, which is an object of the information entered in the form i.e. {email: "", password: ""}.

**GO TO: ../../reducer.js**

//-----------------------

STEP 7 (redux): When we finally get the user data, assuming no errors, the: '.then(() => { this.props.history.push('/')}' sends the user to the home page. Again, this assumes no errors. The reason you call props is because the history method, and specifically, the push method defined IN the history method is apart of browserRouter, which is what wraps the App component.

Of course, we have to assume there will be an error. The submit function below IS a promise, which means you can append .then() AND .catch() to handle errors, and you can handle the errors anywhere. It makes sense to handle the errors on the component that called it, so you should append it the LoginForm component that called it.

**GO TO: ../components/Form/LoginForm.jsx**

*/
  submit = (data) => this.props.login(data).then(() => this.props.history.push('/'))

  render() {
    return (
      <div className="login-page">
        <LoginForm submit={this.submit} />
      </div>
    )
  }
}


/*
This says history is a shape (?) and its push method must be a function and is required, and the login is function that is also required. Although the history object has many other methods, you only need to specify the ones that your component needs, which is just history.
*/
LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
}

/*
export page component, first through connect function of react-redux that connects **this specific react component** to redux.

The first parameter is mapStateToProps, but since we don't need anything, we just pass null.

The second one is mapDispatchToProps and this where we can wrap our functions in dispatch. However, we do not just call functions, we call a dispatch action. As a shortcut, we can just provide an object with the functions that we want to wrap in a dispatch call (in this case, login).
*/
export default connect(null, { login })(LoginPage)
