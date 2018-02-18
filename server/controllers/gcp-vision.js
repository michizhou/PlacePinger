const Storage = require('@google-cloud/storage');

// Your Google Cloud Platform project ID
const vision = require('@google-cloud/vision');

var mongoose = require('mongoose'),
    Rating = mongoose.model('Rating');

var list_of_foods = ['chicken', 'pizza', 'meat'];

function containsObject(obj, list) {
    var x;
    for (x in list) {
        if (list.hasOwnProperty(x) && list[x] === obj) {
            return true;
        }
    }

    return false;
}

exports.imageDetection = function(req, res) {
    console.log(req);

    const client = new vision.ImageAnnotatorClient();

    const bucketName = 'rayleebucket';
    const fileName = 'korean_bbq.jpg';//req.body.filename;

    // Performs label detection on the gcs file
    client
        .labelDetection(`gs://${bucketName}/ray/${fileName}`)
        .then(results => {
            const labels = results[0].labelAnnotations;
            console.log('Labels:');
            labels.forEach( (label) => {
                console.log(label);
                for(var i=0; i<list_of_foods.length; i++) {
                    if(label.description.includes(list_of_foods[i])) {
                        Rating.findOne({clientID: "one"}, (err, rating) => {
                            if(err) {
                                res.send(err);
                            }

                            if(rating && rating.preferences.length > 0) {
                                for (var j = 0; j < rating.preferences.length; j++) {
                                    var preference = rating.preferences[j];
                                    if (preference[j].name === label.description) {
                                        var c = preference[j].category;
                                        var found = false;
                                        for (var k = 0; k < c.length; k++) {
                                            if (c[k] === list_of_foods[i]) {
                                                found = true;
                                                break;
                                            }
                                        }

                                        if (!found) {
                                            preference[j].category.push(list_of_foods[i]);
                                            Rating.findOneAndUpdate({client: "one"}, rating, {new: true}, (err, ratings) => {
                                                if (err) {
                                                    res.send(err);
                                                }
                                                res.json(rating);
                                            });
                                        }
                                    } else {
                                        var pobject = {
                                            name: label.description,
                                            frequency: 1,
                                            imagePath: null,
                                            category: [list_of_foods[i]]
                                        };
                                        rating.preferences.push(pobject);
                                        Rating.findOneAndUpdate({client: req.clientID}, rating, {new: true}, (err, ratings) => {
                                            if (err) {
                                                res.send(err);
                                            }
                                            res.json(rating);
                                        });
                                    }
                                }
                            } else {
                                var pobjecti = {
                                    name: label.description,
                                    frequency: 1,
                                    imagePath: null,
                                    category: [list_of_foods[i]]
                                };
                                if(rating && rating.preferences) {
                                    rating.preferences = [];
                                    rating.preferences.push(pobjecti);
                                }
                                console.log('printing\n\n\n\n\n\n');
                                console.log(rating);
                                console.log('\n\n\n\n\n\n');
                                Rating.findOneAndUpdate({client: "one"}, rating, {new: true}, (err, ratings) => {
                                    if (err) {
                                        res.send(err);
                                    } else {
                                        res.json(ratings);
                                    }
                                });
                            }

                            // console.log('printing\n\n\n\n\n\n');
                            // console.log(rating);
                            // console.log('\n\n\n\n\n\n');
                        });
                }
                // for(var i=0; i<list_of_foods.length; i++) {
                //     if (label.description.includes(list_of_foods[i])) {
                //         Rating.findOne({clientID: req.clientID}, (err, rating) => {
                //             if(err) {
                //                 res.send(err);
                //             }
                //
                //             if(rating && rating.preferences && rating.preferences != null) {
                //                 for (var j = 0; j < rating.preferences.length; j++) {
                //                     var preference = rating.preferences[j];
                //                     if (preference[j].name === label.description) {
                //                         var c = preference[j].category;
                //                         var found = false;
                //                         for (var k = 0; k < c.length; k++) {
                //                             if (c[k] === list_of_foods[i]) {
                //                                 found = true;
                //                                 break;
                //                             }
                //                         }
                //
                //                         if (!found) {
                //                             preference[j].category.push(list_of_foods[i]);
                //                             Rating.findOneAndUpdate({client: req.clientID}, rating, {new: true}, (err, ratings) => {
                //                                 if (err) {
                //                                     res.send(err);
                //                                 }
                //                                 res.json(rating);
                //                             });
                //                         }
                //                     } else {
                //                         var pobject = {
                //                             name: label.description,
                //                             frequency: 1,
                //                             imagePath: null,
                //                             category: [list_of_foods[i]]
                //                         };
                //                         rating.preferences.push(pobject);
                //                         Rating.findOneAndUpdate({client: req.clientID}, rating, {new: true}, (err, ratings) => {
                //                             if (err) {
                //                                 res.send(err);
                //                             }
                //                             res.json(rating);
                //                         });
                //                     }
                //                 }
                //             } else {
                //                 var pobjecti = {
                //                     name: label.description,
                //                     frequency: 1,
                //                     imagePath: null,
                //                     category: [list_of_foods[i]]
                //                 };
                //                 if(rating && rating.preferences) {
                //                     rating.preferences = [];
                //                     rating.preferences.push(pobjecti);
                //                 }
                //                 Rating.findOneAndUpdate({client: req.clientID}, rating, {new: true}, (err, ratings) => {
                //                     if (err) {
                //                         res.send(err);
                //                     }
                //                     res.json(rating);
                //                 });
                //             }
                //
                //         });
                //     }
                // }
            }});
        })
        .catch(err => {
            console.error('ERROR:', err);
        });
};