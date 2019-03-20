import {
    apiGet,
    apiPost,
    apiPut
} from '../../utils';
import axios from 'axios';


//api used to get listing of artist according to the genres selected
export function artistListingGenresAPI(type) {
    return apiGet(`/2.0/?method=artist.search&api_key=cdf6a73c49c4654324b7badc584ad604&format=json&artist=${type}`)
}