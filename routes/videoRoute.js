const express = require('express');
const videosController = require('../controllers/videoController')
const Model = require('../models/videoModel')

function routes(Video){
    const videoRouter = new express.Router();
    const controller = videosController(Video);
 videoRouter.route('/videos')
    .get(controller.get)
    .post(controller.post);
    return videoRouter;
}

module.exports = routes;