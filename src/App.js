import React, { useState, useEffect } from 'react';
import Homepage from './Components/Homepage/Homepage';
import Hats from './Components/HatsPage/Hats';
import Shoppage from './Components/ShopPage/Shoppage';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './Components/Footer/Footer';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import { auth } from './firebase/firebaseUtils'

function App() {
  const [user, setUser] = useState()

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user.multiFactor.user))
  })

  console.log(user)
  return (
    <Router>
      <Navbar users= {user}/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/signIn' element={<SignIn />}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path="/shop" element={<Shoppage />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
