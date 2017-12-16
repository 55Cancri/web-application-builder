/*
exports a const called login that takes credentials as a parameter it returns ANOTHER function, which is where you will make your api request.

All requests will be stored in one api object.

So basically, there is an api request: api.user.login(credentials) that will return a promise, and then the data will be in a response from the server, completing the asynchronous call.

From there, the data will be passed along to the next action. Below, he actually reformatted it so that the above paragraph is done in the api, and then JUST the user is returned so that the dispatch call can happen sooner.

What you are dispatching is a pure redux action called userLoggedIn, which takes the user as a parameter. This is pretty much how all thunk actions will look like.

Simply put, you make an async request to server, get data back, and finally dispatch a redux action which will change the redux store. Passed tense for redux actions (userLoggedIn) makes sense.
*/

// old way: api.user.login(credentials).then(res => res.data.user)

import { USER_LOGGED_IN } from './actions'
import api from '../../components/api'


/*
this is a reducer action (which is, as you might expect, defined in reducer.js). It sets the user data returned from the server (in api.js) in the state.

//-----------------------

STEP 5 (redux): The userLoggedIn action below is called in the dispatch method at the end of the login function below, and it takes the user data from the server (user and token) as a parameter. Then, it makes a call to the store with the type 'USER_LOGGED_IN', and it sends user: user as the PAYLOAD (you can just use "user" for shorthand). In the userReducer.js file, there will be a switch statement that handles the case 'USER_LOGGED_IN' and does something with the data it receives, namely place the data into the application state (since that is what reducers do).

**GO TO: ./userReducer.js'**

*/
export const userLoggedIn = (user) => ({
  type: USER_LOGGED_IN,
  user
})

/*
notice you are dispatching an action. That action "userLoggedIn" was imported from the actions.js file in the same directory. actions and reducers go together.


//-----------------------

STEP 2 (redux): Below is the login function that you used in the LoginPage component when the user clicks the submit button.

The login function takes the form data passed from the submit function ({ email: "", password: ""}) and then returns another function with the dispatch function passed in. Now both the credentials (form data) and the dispatch method can be used in the final resulting function.

In the body of the dispatch function, an api request is made. "api" is pulled in from the root directory of the global components folder ('../../components/api') and is where the requests (post in this case) is made with axios. Api is object that contains a property called "user". In that user property is a method called "login". That method is called here by using api.user.login(), and the credentials (form data) is passed on (again) as a parameter.

**GO TO: ../../components/api'**

*/

export const login = credentials => dispatch =>
api.user.login(credentials).then(user => dispatch(userLoggedIn(user)))

/*
STEP 4 (redux): If you recall from step 3 in api.js in the root directory of the components folder, we made a post request to the database, and then received a response containing the user data and the token. Now we have that, and now the the ".then()" part of the login function above executes. That information we received (res.data.user) is passed into the .then(0) chain in the variable "user".

From there, the dispatch function is called, which dispatches the action "userLoggedIn", and sends the information from the server (user and token) as input.

**GO ABOVE TO: export const userLoggedIn()'**

*/