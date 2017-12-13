import React from 'react'

{/*
Redux will be used to store some state, but not forms. There is no need to because you do not need to store the data that the user enters, you are just interested in submitting the data. Using redux for forms is really only useful when you want to have very functional, very cool, and very smart forms.
*/}

{/*
Typical flow for form component:
· scenes/ > Sign/ > scenes/ > Login/ > index.js
· Login/index.js imports (login) components/
· (login) components/ contains components/Form/
*/}
{/* default form state */}
class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        email: '',
        password: ''
      },
      loading: false,
      errors: {}
    }
  }

  onChange(e) {
    const {name, value} = e.target
    console.log("Here is this: ", e.target)
    let data = Object.assign({}, this.state.data)
    data[name] = value
    this.setState({data})
  }

  render() {
    return (
      <form>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          value={this.state.data.email}
          onChange={this.onChange}
        />

        <label htmlFor="password">Password</label>
        <input type="password" name="password"/>

        <button>Login</button>
      </form>
    )
  }
}

export default LoginForm