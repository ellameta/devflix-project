import React from 'react';
import NavFavorites from '../Navs/NavFavorites';
import FavoriteList from './FavoriteList'
import './favorites.css'

function Favorites () {
    return (
        <div className="favorite-page">
            <NavFavorites />
            <div className="favorites-hero">
                <h2 className="heading-fav">Your Favorite Movies</h2>
            </div>
            <FavoriteList />
        </div>
    )
}

export default Favorites