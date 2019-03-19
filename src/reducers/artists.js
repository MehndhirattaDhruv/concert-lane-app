import types from '../types';

let initState = {
    fetching: false,
    artists:[],
    artistDetail:{}
}


export default function (state = initState, action) {

    switch (action.type) {
        //ARTISTS LISTING 
        case types.GET_ALL_ARTISTS:
            return { ...state, fetching: true }
        case types.GET_ALL_ARTISTS_SUCCESS:
            return { ...state, fetching: false,artists : [...action.payload.artists.artist] }
        case types.GET_ALL_ARTISTS_FAILED:
            return { ...state, fetching: false }

        //used to get detail of artists    
        case types.GET_ARTIST_DETAIL:
            return { ...state, fetching: true }
        case types.GET_ARTIST_DETAIL_SUCCESS:
            return { ...state, fetching: false, artistDetail: {...action.payload.artist} }
        case types.GET_ARTIST_DETAIL_FAILED:
            return { ...state, fetching: false }

        default:
            return { ...state }

    }
}
