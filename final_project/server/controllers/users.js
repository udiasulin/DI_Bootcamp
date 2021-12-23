const db = require('../db/db')

const addUser = (req, res) => {
    db.insertUser(req.body)
        .then(data => res.send(data))
        .catch(err => console.log(err))
}

const loginUser = (req, res) => {
    db.getUser(req.body)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => res.send({ message: err }))
}


module.exports = {
    addUser: addUser,
    loginUser: loginUser
}