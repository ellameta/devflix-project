import React, { useState, useEffect } from 'react';
import './homepage.css';
import PopularCard from './PopularCard';

function Popular () {

    const [popular, setPopular] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
            .then((res) => res.json())
            .then((data) => {
                if(!data.error) {
                    setPopular(data.results)
                }
                else {
                    setPopular([]);
                }
            })
    })

    const favoriteMovie = (movie) => {
        const newFavoriteMovie = [...favorites, movie]
        setFavorites(newFavoriteMovie)
    }
    
    return(
        <div>
            <div className="hero-landing">
                <div className="hero-text">
                    <div className="hero-heading">
                        <h1 className="">Fast & Furious 9</h1>
                    </div>
                    <div className="hero-description">
                        <span className="hero-span">Dominic Toretto and his crew battle the most skilled assassin and high-performance driver they've ever encountered: his forsaken brother.</span><br></br>
                        <h3>2021  |  Drama, Thriller, Action</h3><br></br>
                    </div>
                </div>
            </div>
             
            <div className="heading">
                    <h1>Movies Trending Today</h1>
            </div>
            <div className="">
                {popular.length > 0 && (
                    <ul className="cards">
                        {popular.map(movie => (
                            <li className="movie-card" key={movie.id}>
                                <PopularCard  movie={movie} favoriteMovie={favoriteMovie} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Popular