import axios from "axios";


const API = {

    getPhotos:(data) => {
        return(
            axios.get('https://api.unsplash.com/photos',{
                params:data
            })
        )
    },

    searchPhotos:(data) => {
        return(
            axios.get('https://api.unsplash.com/search/photos',{
                params:data
            })
        )
    }

}

export default API