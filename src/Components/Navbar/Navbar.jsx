import React, { useState } from 'react'
import './Navbar.css'
import CNEMA from '../Assets/CNEMA.png'

import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu, setMenu] = useState("movies");

  return (
    <div className="navbar">
        <div className="navbar-container">
            <div className="nav-logo">
                <a href="Cnema"><img src={CNEMA} alt =""/></a>
            </div>
            <div className="nav-menu">
              <ul className="ul-nav-menu">
                  <li onClick={()=>{setMenu("movies")}}><Link to='/Movies'>Movies</Link>{menu==="movies"?<></>:<></>}</li>
                  <li onClick={()=>{setMenu("news")}}><Link to='/News'>News</Link>{menu==="news"?<></>:<></>}</li>
                  <li onClick={()=>{setMenu("actors")}}><Link to='/Actors'>Actors</Link>{menu==="actors"?<></>:<></>}</li>
                  <li onClick={()=>{setMenu("more")}}><Link to='/More'>More</Link>{menu==="more"?<></>:<></>}</li>
              </ul>
            </div>
            

            <div className="nav-login-button">
            <Link to='/LoginSignup'><button>Login</button></Link>

            </div>
        </div>
    </div>
  )
}

export default Navbar
