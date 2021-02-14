import axios from "axios";
import {CLIENT_ID, URL} from '../constants';

const fetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put'
}

const axiosInstance = axios.create({
    baseURL: URL.API_BASE_URL,
    timeout: 6000
})

const request = (method, url, data) => {

    try {
        const config = {
            url,
            method,
        }

        if(method === fetchConsts.GET) {
            config.params = {
                client_id: CLIENT_ID,
                ...data
            };
        } else {
            config.data = data;
        }

        return axiosInstance(config)
    } catch (e) {
        console.log("@@ e", e)
    }
}

export const fetchJson = {
    get: (url, data) => request(fetchConsts.GET, url, data),
    post: (url, data) => request(fetchConsts.POST, url, data),
    put: (url, data) => request(fetchConsts.PUT, url, data),
}