export const initState = {
    data: [],
    err: null,
    backgrounds: [],
    pickBackground: '',
    ImageData: null,
    images: [],
    currAlbum: null,
    currUser: null
}

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                data: action.payload.data,
                err: action.payload.err,
                loading: true

            }
        case "FETCH_SUCCESS":
            return {
                ...state,
                data: action.payload.data,
                err: action.payload.err,
                loading: false

            }

        case "FETCH_FALIURE":
            return {
                ...state,
                data: action.payload.data,
                err: action.payload.err,
                loading: false
            }

        case "DELETE_ALBUM":
            return {
                ...state,
                album_id: action.payload.album_id,
                data: state.data.filter(item => item.album_id !== action.payload.album_id)
            }

        case "ADD_ALBUM":
            return {
                ...state,
                album_name: action.payload.album_name,
                data: state.data,

            }

        case "FETCH_BACKGROUNDS":
            return {
                ...state,
                backgrounds: action.payload.backgrounds

            }

        case "SET_BACKGROUND":
            return {
                ...state,
                pickBackground: action.payload.pickBackground,
            }

        case "UPLOAD_IMAGE":

            return {
                ...state,
                ImageData: action.payload.ImageData

            }


        case "ADD_IMAGE":
            return {
                ...state,
                image: action.payload.image,
                album_id: state.album_id
            }

        case "FETCH_IMAGES":
            return {
                ...state,
                images: action.payload.images
            }

        case "DATA":
            return {
                ...state,
                currAlbum: action.payload.currAlbum
            }
        case "USER":
            return {
                ...state,
                currUser: action.payload.currUser
            }
        default:
            return { ...state }
    }
}