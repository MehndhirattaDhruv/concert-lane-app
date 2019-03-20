
import {
    artistListingGenresAPI,
} from '../api/genres';
import store from '../store';
import types from '../types';
import {
    AsyncStorage
} from 'react-native';
const { dispatch } = store;



//action used to get detail of the artist
export function getArtistListingGenres(name) {
    dispatch({
        type: types.GET_ARTIST_LISTING_GENRESTYPE
    })


    return new Promise((response, rej) => artistListingGenresAPI(name)
        .then(res => {
            dispatch({
                type: types.GET_ARTIST_LISTING_GENRESTYPE_SUCCESS,
                payload: res
            })
            return response(res)
        })
        .catch(err => {
            dispatch({
                type: types.GET_ARTIST_LISTING_GENRESTYPE_FAILED
            })

            return rej(err)
        })
    )

}



