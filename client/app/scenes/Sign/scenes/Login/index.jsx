{/* 1. import react */}
import React from 'react'
import LoginForm from './components/Form/LoginForm.jsx'

{/* 2. define page component as func expression */}
const LoginPage = () => (
  <div>
    <h1>Login page</h1>

    <LoginForm />
  </div>
)

{/* 3. export page component */}
export default LoginPage