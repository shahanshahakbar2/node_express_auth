const fileRoute = require('express').Router();

const { uploadFile,readAll,readSingle,deleteFile } = require('../controller/fileController');

const auth = require('../middleware/auth')

fileRoute.post(`/upload`,auth, uploadFile);

fileRoute.get(`/all`,auth, readAll).get(`/single/:id`,auth, readSingle); //you linking two controller with reference to fileRoute

fileRoute.delete(`/delete/:id`,auth, deleteFile);

module.exports = fileRoute;

