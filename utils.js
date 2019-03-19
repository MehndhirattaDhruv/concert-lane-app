import React from 'react'
import axios from 'axios';
import {
    AsyncStorage
} from 'react-native';
import { apiUrl } from './src/constants'

export function isLoggedIn() {
    return AsyncStorage.getItem('user');
}

export function logout() {
    return AsyncStorage.removeItem('user');

}

export function saveObject(value) {
    return AsyncStorage.setItem('user', JSON.stringify(value));
}

export function getObject(key) {

    return AsyncStorage.getItem(key)
}


export function generateUrl(path) {
    return apiUrl + path;
}

export function apiReq(endPoint, data={}, method, headers, config) {
    return new Promise((res, rej) => {
        try {
            headers = {
                ...headers,
                "Content-Type": "application/json"
            }


            if (method == 'get') {
                data = {
                    params: data,
                    headers,
                    ...config
                }
            }
            if (method == 'delete') {
                data = {
                    params: data,
                    headers,
                    ...config
                }
            }
            axios[method](endPoint, data, { ...config, headers }).then((result) => {

                let { data } = result;
                return res(data)
            }).catch((err) => {
                return rej(err);
            });

        }
        catch (err) {

        }
    })
}

export function apiPost(endPoint, data, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'post', headers, config);
}

export function apiDelete(endPoint, data, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'delete', headers, config);
}

export function apiGet(endPoint, data, headers = {}, config = {}) {
    return apiReq(generateUrl(endPoint), data, 'get', headers, config);
}

export function apiPut(endPoint, data, headers = {}, config = {}) {

    return apiReq(generateUrl(endPoint), data, 'put', headers, config);
}

export const generateError = (err) => {
    return err && err.response && err.response.data && err.response.data.message || 'Server Encountered an Error';
}

