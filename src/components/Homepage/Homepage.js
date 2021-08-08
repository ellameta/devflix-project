import React from 'react';
import NavHome from '../Navs/NavHome';
import Popular from './Popular';
import './homepage.css';


function Homepage () {
    return(
        <div className="homepage">
            <NavHome />
            <Popular />
        </div>
    )
}

export default Homepage