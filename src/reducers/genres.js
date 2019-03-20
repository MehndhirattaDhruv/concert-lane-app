import types from '../types';

let initState = {
    fetching: false,
    genresArtists: [],
}


export default function (state = initState, action) {

    switch (action.type) {
        //ARTISTS LISTING 
        case types.GET_ARTIST_LISTING_GENRESTYPE:
            return { ...state, fetching: true }
        case types.GET_ARTIST_LISTING_GENRESTYPE_SUCCESS:
        {
            console.log(action.payload  , "in reducer")
        }
            return { ...state, fetching: false, genresArtists: [...action.payload.results.artistmatches.artist]  }
        case types.GET_ARTIST_LISTING_GENRESTYPE_FAILED:
            return { ...state, fetching: false }

    

        default:
            return { ...state }

    }
}
