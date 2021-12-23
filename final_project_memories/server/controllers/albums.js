const db = require('../db/db')

const getAllAlbums = (req, res) => {
    db.getAllAlbumsByUser(req.body.user_id_fk)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => res.send({ message: err }))
}

const createAlbum = (req, res) => {
    db.insertAlbum(req.body)
        .then(data => res.status(200).json(data))
        .catch(err =>res.send({ message: err }))

}

const deleteAlbum = (req, res) => {
    db.deleteAlbumById(req.params.id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.send({ message: err })
        })
}

module.exports = {
    getAllAlbums: getAllAlbums,
    createAlbum: createAlbum,
    deleteAlbum: deleteAlbum
}