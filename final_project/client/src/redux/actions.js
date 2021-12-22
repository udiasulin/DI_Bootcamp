export const fetchData = (data, err) => {
    return {
        type: "FETCH_START",
        payload: {
            data: data,
            error: err,
            loading: false
        }
    }
}

export const fetchDataSucess = (data, err) => {
    return {
        type: "FETCH_SUCCESS",
        payload: {
            data: data,
            error: err,
            loading: false
        }
    }
}

export const fetchFaliure = (err) => {
    return {
        type: "FETCH_FALIURE",
        payload: {
            error: err,
            loading: false
        }
    }
}

export const deleteAlbumById = (album_id) => {
    return {
        type: "DELETE_ALBUM",
        payload: {
            album_id: album_id
        }
    }
}

export const insertAlbum = (album_name) => {
    return {
        type: "ADD_ALBUM",
        payload: {
            album_name: album_name
        }
    }
}

export const getAllBackgrounds = (backgrounds) => {
    return {
        type: "FETCH_BACKGROUNDS",
        payload: {
            backgrounds: backgrounds
        }
    }
}

export const setBackground = (pickBackground) => {
    return {
        type: "SET_BACKGROUND",
        payload: {
            pickBackground: pickBackground
        }
    }
}

export const uploadImage = (ImageData, album_id) => {
    return {
        type: "UPLOAD_IMAGE",
        payload: {
            ImageData: ImageData,
            album_id: album_id
        }
    }
}

export const addImage = (image) => {
    return {
        type: "ADD_IMAGE",
        payload: {
            image: image
        }
    }
}

export const getImages = (images) => {
    return {
        type: "FETCH_IMAGES",
        payload: {
            images: images,
        }
    }
}

export const currentAlbum = (currAlbum) => {
    return {
        type: "DATA",
        payload: {
            currAlbum: currAlbum,
        }
    }
}