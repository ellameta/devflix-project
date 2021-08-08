import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import FavoriteCard from './FavoriteCard'

function FavoriteList () {
    const {favoritelist} = useContext(GlobalContext)
    return(
        <div>
            {favoritelist.length > 0 ? (
                <div className="all-movies">
                    <ul className="tc cards">
                        {favoritelist.map(movie => (
                            <li key={movie.id}><FavoriteCard movie={movie}/></li>
                        ))}
                    </ul>
                </div>
            ) : (
                <h2 className="no-movies tc mt6">You don't have any movies saved. Go add some!</h2>
            )}
            
        </div>
    )
}



export default FavoriteList