import React from 'react';
import { Link } from 'react-router-dom';
import '../Favorites/favorites.css'

function NavFavorites () {
    return(
        <div className="nav">
            <Link to="/homepage">
                <div className="logo white">
                    <h2>DevFlix</h2>
                </div>
            </Link>
            <div className="menu">
                <Link to="/homepage">
                        <div className="favorites">
                            <h3>Home</h3>
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

export default NavFavorites