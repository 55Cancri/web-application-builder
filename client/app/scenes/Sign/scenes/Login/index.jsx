{/* 1. import react */}
import React from 'react'
import LoginForm from './components/Form/LoginForm.jsx'

/*
  2. define page component as func expression
  · pass submit function to children
*/
class LoginPage extends React.Component {

  submit = (data) => {
    console.log(data)
  }

  render() {
    return (
      <div className="login-page">
        <LoginForm submit={this.submit} />
      </div>
    )
  }
}

{/* 3. export page component */}
export default LoginPage
