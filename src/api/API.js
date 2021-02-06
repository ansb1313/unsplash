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
    },

    getTopics:(data) => {
        return(
            axios.get('https://api.unsplash.com/topics',{
                params:data
            })
        )
    },

    getTopicPage:(data) => {

        return(
            axios.get(`https://api.unsplash.com/topics/${data.slug}`,{
                params:data
            })
        )
    },

    getTopicPhotos:(data) => {

        return(
            axios.get(`https://api.unsplash.com/topics/${data.slug}/photos`,{
                params:data
            })
        )

    }

}

export default API