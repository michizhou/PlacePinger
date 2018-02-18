/**
 * Module Dependencies
 */
const errors = require('restify-errors');
var twilio = require('twilio');
var multer = require('multer');
var fs = require('fs');
const UPLOAD_PATHS = "uploads";
// const upload = multer({ dest: `${UPLOAD_PATHS}/` });
const upload = multer({
    dest:'images/',
    limits: {fileSize: 10000000, files: 1},
    fileFilter:  (req, file, callback) => {

        if (!file.originalname.match(/\.(jpg|jpeg)$/)) {

            return callback(new Error('Only Images are allowed !'), false)
        }

        callback(null, true);
    }
}).single('image');
/**
 * Model Schema
 */
const Rating = require('../models/todo');

'use strict';
module.exports = function(app) {
    var todoList = require('../controllers/todocontroller');
    var sendSMS = require('../controllers/twilioClient');
    var gcpVision = require('../controllers/gcp-vision');

    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);


    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/sms')
        .post(sendSMS.calculateHighest);

    app.route('/analysis')
        .post(gcpVision.imageDetection);
};