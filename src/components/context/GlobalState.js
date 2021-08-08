import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer'
//initial state 
const initialState = {
    favoritelist : localStorage.getItem('favoritelist') 
        ? JSON.parse(localStorage.getItem('favoritelist')) 
        : [] 
};

//create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("favoritelist", JSON.stringify(state.favoritelist))
    }, [state])

    //actions
    const addMovieToFavorites = movie => {
        dispatch({type: "ADD_MOVIE_TO_FAVORITES", payload: movie})
    }

    const removeFromFavorites = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_FAVORITES", payload: id})
    }


    return (
        <GlobalContext.Provider value={{favoritelist: state.favoritelist, addMovieToFavorites, removeFromFavorites}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

