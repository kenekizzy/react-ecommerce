import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebaseUtils'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './NavbarStyle.css'

const Navbar = ({ users }) => {
  const signOut = (e) =>{
    e.preventDefault()
    auth.signOut()
    .then(() => console.log("signed out"))
    .catch(err => console.log(err))
    window.location.reload(true);
  }
  console.log(users)
  return (
    <div className='header'>
       <Link to="/" className="logo-container"><Logo className="logo" /></Link> 
       <div className='options'>
            <Link to="/shop" className="option">SHOP</Link>
            <Link to="/shop" className="option">CONTACT</Link>
            {users ? <div className="option" onClick={signOut}>SIGN OUT</div> 
            : <Link to="/signIn" className="option">SIGN IN</Link>
            }
            
       </div>
    </div>
    
  )
}

export default Navbar