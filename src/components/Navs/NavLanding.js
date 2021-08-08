import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

function NavLanding () {

    return(
        <div className="nav">
            <div className="logo">
                <h2>DevFlix</h2>
            </div>
            <div className="links">
                <Link to="/signin">
                    <div className="signin-button">
                        <h3>Sign In</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavLanding