import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../Sign/reducer'

/*
The HomePage component takes props (i.e. HomePage = (props)), but instead of using props and then props.isAuthenticated, you can just deconstruct it right there in the parameters.

Below the h1 tag, the code says "If isAuthenticated evaluates to true, render a logout button on the home page, otherwise render a login link." The commented out code below this line is the way it was before.

The Logout button has an onClick method that triggers an action called "logout" when clicked. This method, just like the isAuthenticated method, is passed down to the HomePage component from (?) so that it can be used from within the component itself. Also, the logout function is passed into the connect function as the second parameter so that it can be used in the dispatch function (what does this mean? Learn more about mapStateToProps and connect()).
*/

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Home page</h1>
    {isAuthenticated ? <button onClick={() => logout()} >Logout</button> : <Link to='/login'>Login</Link>}
    {/* <Link to='/login'>Login</Link> */}
  </div>
)

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}


/*
this function returns the props that will be available on the home page. One of those props is "isAuthenticated". The double exclamation marks convert values into a boolean. 0, undefined, and false (I think) are all converted into false, while anything else is converted to true.

So if the token in redux state is undefined, isAuthenticated will be converted to false, else if it is there as any kind of string, it will be converted to true. If it is there, it will be destructured and used in the above function.
*/

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  }
}

/*
Rem said he was passing down the logout function to connect to wrap into the dispatch function. I have no idea what this means.
*/

export default connect(mapStateToProps, { logout })(HomePage)