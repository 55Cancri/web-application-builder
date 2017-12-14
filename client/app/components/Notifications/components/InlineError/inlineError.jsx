import React from 'react'
import PropTypes from 'prop-types'


/*
this is an arrow function. When you return objects (which are wrapped in "{}"), you need to use parenthesis instead of another pair of "{}". In this instance, it seems like the jsx tags are ignorned and just the {text} object is relevant, therefore the parentheses are necessary. Also, the return statement is implicit in arrow functions, so this component is "returning" a jsx tag in the render method of the parent LoginForm component. Return statements return the value to the function caller. If return is not used, the value "undefined" is returned.

components have attributes just like html tags do. These are called "props" in react. They can also be of any type including string, number, function, or array. However, it can be difficult to decipher what is the correct type that should be passed into a component after you have been away for awhile or other developers look at your code. defining propTypes tell you which type is required and give good error messages in the console when the types do not match.
*/

const InlineError = ({ text }) => (
  <span style={{ color: "#ae5856" }}>{text}</span>
)

InlineError.propTypes = {
  text: PropTypes.string.isRequired
}

export default InlineError