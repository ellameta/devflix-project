import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import {FaCheck} from 'react-icons/fa'

const FavoriteCard = ({ movie }) => {

    const {removeFromFavorites} = useContext(GlobalContext);

    return (
        <div className="movie grow tl">
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} Poster`}></img>
            <div className="movie-hover">
                <h3 className="movie-title black">{movie.title} Overview:</h3>
                <p className="movie-info">{movie.overview}</p>
                <button onClick={()=> removeFromFavorites(movie.id)} className="hearticon">
                    <div className="watched">
                        <h3>Watched</h3>
                        <h3><FaCheck /></h3>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default FavoriteCard
