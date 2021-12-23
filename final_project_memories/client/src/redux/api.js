import {
    fetchData, fetchDataSucess, fetchFaliure, deleteAlbumById,
    insertAlbum, getAllBackgrounds, uploadImage, addImage, getImages
} from './actions'
import axios from "axios";



const getAllImages = (album_id) => {
    return (dispacth) => {
        axios.post('http://localhost:5000/workshop/images/ai', { album_id: album_id })
            .then(res => {
                dispacth(getImages(res.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}


const insertImage = (image, album_id) => {
    return (dispacth) => {
        axios.post('http://localhost:5000/workshop/images', {
            album_id_fk: album_id,
            image_url: image.url,
            image_name: image.public_id
        })
            .then(res => {
                dispacth(addImage(image))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}


const uploadImageCloud = (imageSelected) => {
    return (dispacth) => {

        const form_data = new FormData()

        form_data.append("upload_preset", "ifvw8sjm")
        form_data.append("file", imageSelected)

        axios.post("https://api.cloudinary.com/v1_1/dslk6mmz4/upload", form_data)
            .then(res => dispacth(uploadImage(res.data)))
            .catch(err => console.log(err))
    }
}

const AddAlbum = (name, user) => {

    return (dispacth) => {
        axios.post('http://localhost:5000/home/album/', { user_id: user, album_name: name })
            .then(res => {
                dispacth(insertAlbum(name))
            })
            .catch((err) => {
                dispacth(fetchFaliure(err))
            })
    }
}

const deleteAlbum = (id) => {
    return (dispacth) => {
        axios.delete(`http://localhost:5000/home/album/${id}`)
            .then(res => {
                dispacth(deleteAlbumById(id))
            })
            .catch((err) => {
                dispacth(fetchFaliure(err))
            })
    }
}

const getAlbums = (user_id) => {
    return (dispacth) => {
        dispacth(fetchData());
        axios.post('http://localhost:5000/home/album/c', { user_id_fk: user_id })
            .then(res => {
                dispacth(fetchDataSucess(res.data))
            })
            .catch((err) => {
                dispacth(fetchFaliure(err))
            })
    }
}


const getBackgrounds = () => {
    return (dispacth) => {
        axios.get('http://localhost:5000/workshop/images/backgrounds')
            .then(res => {
                dispacth(getAllBackgrounds(res.data))
            })
            .catch((err) => {
                dispacth(fetchFaliure(err))
            })
    }
}

export {
    getAlbums,
    deleteAlbum,
    AddAlbum,
    getBackgrounds,
    uploadImageCloud,
    insertImage,
    getAllImages
}