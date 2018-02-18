const vision = require('@google-cloud/vision');

var mongoose = require('mongoose'),
    Rating = mongoose.model('Rating');

var fs = require('fs');

exports.imageDetection = function(req, res) {
    // fs.readFile(req.path, )

    const client = new vision.ImageAnnotatorClient();
    // req.file
    // Performs label detection on the image file
    // client
    //     .labelDetection(imgpath)
    //     .then(results => {
    //         const labels = results[0].labelAnnotations;
    //
    //         console.log('Labels:');
    //         labels.forEach(label => console.log(label.description));
    //     }).catch(err => {
    //         console.error('ERROR:', err);
    //     });
    //
    // console.log(req);
    // try {
    //     var toadd = req.body.preference;
    //     Rating.findOne({currentID: req.body.clientID}, function(err, rating) {
    //         rating.preferences.push(toadd);
    //         console.log(rating);
    //         // Rating.findOneAndUpdate({currentID: req.body.currentID}, rating, {new: true}, function(err, ratings) {
    //         //     if (err)
    //         //         res.send(err);
    //         //     res.json(ratings);
    //         // });
    //     })
    // }
    console.log(req);
};