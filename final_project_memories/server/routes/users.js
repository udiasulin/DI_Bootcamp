const exp = require('express');
const { addUser } = require('../controllers/users.js');
const { loginUser } = require('../controllers/users.js');
const router = exp.Router();

router.post('/users', addUser)
router.post('/users/login', loginUser)

module.exports = router