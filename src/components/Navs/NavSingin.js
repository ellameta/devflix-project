import React from 'react'
import { Link } from 'react-router-dom';
import '../Signin/signin.css'

const NavSingin = () => {
    return (
        <div>
            <div className="nav">
                <Link to="/">
                    <div className="logo">
                        <h2>DevFlix</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavSingin
