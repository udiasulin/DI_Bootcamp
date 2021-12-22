const db = require('../db/db')

const getImagesFromDb = (req, res) => {
    db.getAllImagesByAlbum(req.body.album_id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => res.send({ message: err }))
}

const uploadImage = (req, res) => {
    db.insertImage(req.body)
        .then(data => res.send(data))
        .catch(err => console.log(err))
}

const deleteImage = (req, res) => {
    db.deleteImageById(req.body.image_id)
        .then(data => res.send(data))
        .catch(err => console.log(err))

}

const updateImage = (req, res) => {
    db.updateImageByAlbum(req.body)
        .then(data => res.send(data))
        .catch(err => console.log(err))
}

const allBackgrounds = (req, res) => {
    db.getAllBackgrounds()
        .then(data => res.send(data))
        .catch(err => console.log(err))
}


module.exports = {
    getImagesFromDb: getImagesFromDb,
    uploadImage: uploadImage,
    deleteImage: deleteImage,
    updateImage: updateImage,
    allBackgrounds: allBackgrounds
}