import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Chat Away</span>
            <span className="title">Log in</span>
            <form action="">
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Log In</button>
            </form>
            <p>Don't have an account? Sign up</p>
        </div>
    </div>
    
  )
}

export default Login