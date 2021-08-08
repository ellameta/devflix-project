import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

function NavSignup () {

    return(
        <div className="nav">
            <Link to="/">
                <div className="logo">
                    <h2>DevFlix</h2>
                </div>
            </Link>
        </div>
    )
}

export default NavSignup