import React from 'react';
import { Link } from 'react-router-dom';

function NavHome () {
    return(
        <div className="nav">
            <Link to="/homepage">
                <div className="logo">
                    <h2>DevFlix</h2>
                </div>
            </Link>
            <div className="menu">
                <Link to="/favorites">
                        <div className="favorites">
                            <h3>My Favorites</h3>
                        </div>
                </Link>
                <Link to="/">
                    <div className="signin-button">
                        <h3>Sign Out</h3>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default NavHome