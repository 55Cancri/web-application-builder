/*
reducer is just a function that takes state and action and returns a new state.
*/

import { USER_LOGGED_IN } from './actions'

/*

STEP 6 (redux): Here is where the reducer that handles user related stuff like login and and signup is handled. Reducers have a switch statement that test for different cases and change something in the state as a result. They then return this new state, which visually updates the components in the app.

Below, the user reducer (just a simple function) takes both a state and an action, and then returns a new state. In the parenthesis, es6 magic is used in the form of: user(state = {}, action = {}) and it says if there is no previous state or action passed in, treat it as an empty object (I think...?).

In the body, it handles the case where the user logged in. The user information that was passed from the loggedInUser action in the reducer.js file enters this files argument as the action variable (specifically: action = {}). The reducer then updates the state exactly in the return statement. From the action object the user property is retreived and returned, which contains the user data and token that was passed from the loggedInUser action in the reducer.js file.


The default case of the reducer is to just return the same state.

Finally, this user reducer function MUST be exported and imported in the rootRuducer.js file (../../../components/rootReducer.js) so that it can be used in the combineReducers functions.

Now, if no errors are thrown, then the user is redirected to the home page. This occurs on the final unfulfilled promise of the submit function.


**GO BACK TO: ./scenes/Login/index.jsx**

*/

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user
    default:
      return state
  }
}