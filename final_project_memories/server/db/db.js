const knex = require('knex');
const env = require('dotenv');

env.config({ path: './.env' })

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE
    }
})

// users

const insertUser = (userData) => {
    return db('users')
        .insert({
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            user_name: userData.user_name,
            password: userData.password
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

const getUser = (userData) => {
    return db('users')
        .select('user_name', 'password', 'user_id')
        .where({
            user_name: userData.user_name,
            password: userData.password
        })
        .then(data => data)
        .catch(error => error)
}


//albums

//delete album
const deleteAlbumById = (id) => {
    return db('albums').
        where('album_id', id)
        .del()
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

//insert album
const insertAlbum = (data) => {
    return db('albums')
        .insert({
            user_id_fk: data.user_id,
            album_name: data.album_name
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

const getAllAlbumsByUser = (id) => {
    return db('albums')
        .select('*')
        .where({
            user_id_fk: id
        })
        .then(data => data)
        .catch(error => console.log(error))
}


//images

// update image by album_id
const updateImageByAlbum = (data) => {
    return db('images')
        .where({ album_id_fk: data.album_id_fk, image_id: data.image_id })
        .update({ image_url: data.image_url })
        .then(data => console.log(data))
        .catch(error => console.log(error))

}

// delete image
const deleteImageById = (id) => {
    return db('images').
        where('image_id', id)
        .del()
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

// insert image
const insertImage = (imageData) => {
    return db('images')
        .insert({
            album_id_fk: imageData.album_id_fk,
            image_url: imageData.image_url,
            image_name: imageData.image_name
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
}

// get All images by album_id
const getAllImagesByAlbum = (id) => {
    return db('images')
        .select('album_name', 'image_url', 'image_name')
        .innerJoin('albums', 'albums.album_id', 'images.album_id_fk')
        .where({
            album_id: id
        })
        .then(data => data)
        .catch(error => console.log(error))
}

const getAllBackgrounds = () => {
    return db('images')
        .select('*')
        .where('image_name', 'like', `%background%`)
        .then(data => data)
        .catch(error => console.log(error))
}

module.exports = {
    //home page
    deleteAlbumById: deleteAlbumById,
    insertAlbum: insertAlbum,
    getAllAlbumsByUser: getAllAlbumsByUser,

    //WorkShop Page
    updateImageByAlbum: updateImageByAlbum,
    deleteImageById: deleteImageById,
    insertImage: insertImage,
    getAllImagesByAlbum: getAllImagesByAlbum,
    getAllBackgrounds: getAllBackgrounds,

    //user
    insertUser: insertUser,
    getUser: getUser
}