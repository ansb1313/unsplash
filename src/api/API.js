import {fetchJson} from "../lib/Fetch";

const API = {
    getPhotos:(data) => fetchJson.get('photos', data),
    searchPhotos:(data) => fetchJson.get('search/photos', data),
    getCollectionsInSearch:(data) => fetchJson.get('search/collections', data),
    getUsersInSearch:(data) => fetchJson.get('search/users',data),
    getTopics:(data) => fetchJson.get('topics', data),
    getTopicPage:(data, slug) => fetchJson.get(`topics/${slug}`, data),
    getTopicPhotos:(data, slug) => fetchJson.get(`topics/${slug}/photos`, data),
}

export default API