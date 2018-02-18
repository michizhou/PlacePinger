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

    app.route('/upload')
        .post((req, res) => {

        upload(req, res, function (err) {

            if (err) {
                console.log(err);
                res.status(400).json({message: err.message});

            } else {

                let path = `/images/${req.file.filename}`;
                res.status(200).json({message: 'Image Uploaded Successfully !', path: path});
            }
        });
        });
};

// module.exports = function(server) {
//
//     /**
//      * POST
//      */
//     server.post('/rating', (req, res, next) => {
//         if (!req.is('application/json')) {
//         return next(
//             new errors.InvalidContentError("Expects 'application/json'"),
//         );
//     }
//
//     let data = req.body || {};
//
//     let todo = new Rating(data);
//     todo.save(function(err) {
//             if (err) {
//                 console.error(err);
//                 return next(new errors.InternalError(err.message));
//                 next();
//             }
//
//             res.send(201);
//             next();
//         });
//     });
//
//     /**
//      * LIST
//      */
//     server.get('/ratings', (req, res, next) => {
//         Rating.apiQuery(req.params, function(err, docs) {
//             if (err) {
//                 console.error(err);
//                 return next(
//                     new errors.InvalidContentError(err.errors.name.message),
//                 );
//             }
//
//             res.send(docs);
//             next();
//         });
//     });
//
//     /**
//      * GET
//      */
//     server.get('/rating/:rating_id', (req, res, next) => {
//         Todo.findOne({ _id: req.params.rating_id }, function(err, doc) {
//             if (err) {
//                 console.error(err);
//                 return next(
//                     new errors.InvalidContentError(err.errors.name.message),
//                 );
//             }
//
//             res.send(doc);
//             next();
//         });
//     });
//
//     /**
//      * UPDATE
//      */
//     server.put('/rating/:rating_id', (req, res, next) => {
//         if (!req.is('application/json')) {
//             return next(
//                 new errors.InvalidContentError("Expects 'application/json'"),
//             );
//         }
//
//         let data = req.body || {};
//
//         if (!data._id) {
//             data = Object.assign({}, data, { _id: req.params.rating_id });
//         }
//
//         Rating.findOne({ _id: req.params.rating_id }, function(err, doc) {
//             if (err) {
//                 console.error(err);
//                 return next(
//                     new errors.InvalidContentError(err.errors.name.message),
//                 );
//             } else if (!doc) {
//                 return next(
//                     new errors.ResourceNotFoundError(
//                         'The resource you requested could not be found.',
//                     ),
//                 );
//             }
//
//             Rating.update({ _id: data._id }, data, function(err) {
//                 if (err) {
//                     console.error(err);
//                     return next(
//                         new errors.InvalidContentError(err.errors.name.message),
//                     );
//                 }
//
//                 res.send(200, data);
//                 next();
//             });
//         });
//     });
//
//     /**
//      * DELETE
//      */
//     server.del('/rating/:rating_id', (req, res, next) => {
//         Rating.remove({ _id: req.params.rating_id }, function(err) {
//             if (err) {
//                 console.error(err);
//                 return next(
//                     new errors.InvalidContentError(err.errors.name.message),
//                 );
//             }
//
//             res.send(204);
//             next();
//         });
//     });
// };