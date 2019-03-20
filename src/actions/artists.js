import {
    artistsListingAPI,
    artistDetailAPI
} from '../api/artistsAPI';
import store from '../store';
import types from '../types';
import {
    AsyncStorage
} from 'react-native';
const { dispatch } = store;


// action used to get listing of all the artists 
export function getArtists() {
    dispatch({
        type: types.GET_ALL_ARTISTS
    })


    return new Promise((response, rej) => artistsListingAPI()
        .then(res => {
            dispatch({
                type: types.GET_ALL_ARTISTS_SUCCESS,
                payload: res
            })
            return response(res)
        })
        .catch(err => {
            dispatch({
                type: types.GET_ALL_ARTISTS_FAILED
            })

            return rej(err)
        })
    )

}

//action used to get detail of the artist
export function getArtistDetail(name) {
    dispatch({
        type: types.GET_ARTIST_DETAIL
    })


    return new Promise((response, rej) => artistDetailAPI(name)
        .then(res => {
            dispatch({
                type: types.GET_ARTIST_DETAIL_SUCCESS,
                payload: res
            })
            return response(res)
        })
        .catch(err => {
            dispatch({
                type: types.GET_ARTIST_DETAIL_FAILED
            })

            return rej(err)
        })
    )

}



