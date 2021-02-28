import {fetchJson} from "../lib/Fetch";

const API = {
    getPhotos:(data) => fetchJson.get('photos', data),
    getPhotoById:(id, data) => fetchJson.get(`photos/${id}`, data),
    getPhotoRelated:(id, data) => fetchJson.get(`photos/${id}/related`, data),
    searchPhotos:(data) => fetchJson.get('search', data),
    getTopics:(data) => fetchJson.get('topics', data),
    getTopicPage:(data, slug) => fetchJson.get(`topics/${slug}`, data),
    getTopicPhotos:(data, slug) => fetchJson.get(`topics/${slug}/photos`, data),
    getCollectionPhotos:(id) => fetchJson.get(`collections/${id}/photos`,),
    getCollectionData:(id) => fetchJson.get(`collections/${id}`,),
    getUserData:(username) => fetchJson.get(`users/${username}`,),
    getUserPhotos:(username) => fetchJson.get(`users/${username}/photos`,),
    getUserCollections:(username)=>fetchJson.get(`users/${username}/collections`),
    getUserLikes:(username)=>fetchJson.get(`users/${username}/likes`)
}
export default API