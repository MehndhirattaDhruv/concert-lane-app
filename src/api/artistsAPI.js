import { 
    apiGet  , 
    apiPost , 
    apiPut
 } from '../../utils';
import axios from 'axios';

 //api used to fetch listing of artists 
 export function artistsListingAPI (){
     return apiGet(`/2.0/?method=chart.gettopartists&api_key=cdf6a73c49c4654324b7badc584ad604&format=json`)
 }

 //api used to get detail of artist
 export function artistDetailAPI(name){
     return apiGet(`/2.0/?method=artist.getInfo&api_key=cdf6a73c49c4654324b7badc584ad604&format=json&artist=${name}`)
 }