

const initialState = {

    photos:[],
    searchResult:{},
    topics:[],
    topicPage:{},
    topicPhotos:[]

}

export const Action = {

    Types:{

        GET_PHOTOS:'GET_PHOTOS',
        SEARCH_PHOTOS:'SEARCH_PHOTOS',
        UPDATE_STATE:'UPDATE_STATE',
        GET_TOPICS:'GET_TOPICS',
        GET_TOPIC_PAGE:'GET_TOPIC_PAGE',
        GET_TOPIC_PHOTOS: 'GET_TOPIC_PHOTOS'
    },

    Creators:{

        updateState:(props) => ({

            type:Action.Types.UPDATE_STATE,
            props

        }),

        getPhotos:(payload) => ({

            type:Action.Types.GET_PHOTOS,
            payload

        }),

        searchPhotos:(payload) => ({
            type:Action.Types.SEARCH_PHOTOS,
            payload
        }),

        getTopics:(payload) => ({

            type:Action.Types.GET_TOPICS,
            payload

        }),

        getTopicPage:(payload) => ({

            type:Action.Types.GET_TOPIC_PAGE,
            payload

        }),

        getTopicPhotos:(payload) => ({

            type:Action.Types.GET_TOPIC_PHOTOS,
            payload

        })

    }

}

const reducer = (state=initialState, action) => {

    switch (action.type){

        default: return state;

        case Action.Types.UPDATE_STATE:{
            return {
                ...state,
                ...action.props
            }
        }

    }

}

export default reducer;