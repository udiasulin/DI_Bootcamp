const exp = require('express');
const { getImagesFromDb, uploadImage,
    deleteImage, updateImage, allBackgrounds } = require('../controllers/images.js');
const router = exp.Router();

router.post('/images/ai', getImagesFromDb)
router.post('/images', uploadImage)
router.delete('/images', deleteImage)
router.put('/images', updateImage)
router.get('/images/backgrounds', allBackgrounds)

module.exports = router