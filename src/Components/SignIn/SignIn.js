import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SignInStyle.css'
import { signInWithGoogle } from '../../firebase/firebaseUtils'

const SignIn = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }
  return (
    <div className='body'>
        <div className='sign-in'>
        <div className='group'>
            <form onSubmit={handleSubmit}>
                <h3> Sign In</h3>
                <input type="email" id="email" className='form-input' name="email" onChange={handleChange} value={user.email} placeholder="Email Address"/>
                <input type="password" id="password" className='form-input' name='password' onChange={handleChange} value={user.password} placeholder="Password"/>
                <button className='custom-button'>Sign In</button>
                <button className='custom-button' onClick={signInWithGoogle}>Sign In With Google</button>
                <h5>Don't have an account? <Link className="signUp" to="/signUp">SignUp</Link></h5>
            </form>
        </div>
    </div>
    </div>
  )
}

export default SignIn