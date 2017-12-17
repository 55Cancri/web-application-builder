/*
this file handles calls to the database.
it is defined on the root of the components folder, just like App.js and the root reducer that combines all the other reducers. Every file that needs to make db requests will import this file.

the user object is given a login function. It takes credentials as an argument.

Axios is used to make post requests, then we recieve the returned data, just like how fetch works.

//-----------------------

STEP 3 (redux): The axios request below may look difficult (even though it is short), but it is very simple. We now have the credentials that passed from the previous function (api.user.login(credentials)), and put that form data ({email: "", password: ""}) in the login function as a parameter called "credentials".

axios makes a post request to the server.js file in the server folder. The first argument is the route, and the second argument is a DESTRUCTURING of the form data. When you see curly braces passed in as arguments, it is a shorthand way of passing in the entire object as an argument. So: axios.post({ credentials }) destructures the object containing the form data to: axios.post({ email: "me@you.no", password: "hey"}).

After this, a promise is returned back to the axios request in the form a response. We assign the response to the variable "res" and get the data.user property from the res object. We will be able to get the email and the token from that. Also, there are still unfullfilled promises in reducer.js and and LoginPage components, so we return BACK to the reducer.js file.

**GO BACK TO: ../scenes/Sign/reducer.js'**
(this function is complete, no need to return.)
*/

import axios from 'axios'

export default {
  user: {
    login: credentials => axios.post('/api/auth', { credentials }).then(res => res.data.user)
  }
}