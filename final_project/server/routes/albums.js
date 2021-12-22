const exp = require('express');
const { getAllAlbums, createAlbum, deleteAlbum } = require('../controllers/albums.js');
const router = exp.Router();

router.post('/album/c', getAllAlbums)
router.post('/album', createAlbum)
router.delete('/album/:id', deleteAlbum)


module.exports = router