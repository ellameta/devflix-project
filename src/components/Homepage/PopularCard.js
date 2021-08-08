import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import 'react-icons';
import {FaHeart} from 'react-icons/fa'


function PopularCard ({ movie }) {
    const {addMovieToFavorites, favoritelist} = useContext(GlobalContext);

    let storedMovie = favoritelist.find(o => o.id === movie.id);

    const favoritelistDisabled = storedMovie ? true : false;

    return(
        <div className="movie grow">
            <div>
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`${movie.title} Poster`}></img>)
                    : (<div>
                        <h1>No Image</h1>
                        </div>)
                }
                
            </div>
            
            <div className="movie-hover">
                <h3 className="movie-title">{movie.title} Overview:</h3>
                <p className="movie-info">{movie.overview}</p>
                <button 
                    onClick={() => addMovieToFavorites(movie)} 
                    className="hearticon btn"
                    disabled={favoritelistDisabled}>
                        <h2><FaHeart /></h2>
                </button>
            </div>
        </div>
    )
}

export default PopularCard