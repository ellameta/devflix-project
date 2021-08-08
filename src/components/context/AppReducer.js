export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_FAVORITES":
            return {
                ...state,
                favoritelist : [action.payload, ...state.favoritelist]
            }
        case "REMOVE_MOVIE_FROM_FAVORITES" : 
            return{ 
                ...state,
                favoritelist : state.favoritelist.filter((movie) => movie.id !== action.payload)
            }
        default: 
        return state;
    }
}