var config = require('./config');
// var mongoose = require('mongoose');
    // Rating = mongoose.model('Rating');

exports.sendSms = function(to) {
    var client = require('twilio')(config.accountSid, config.authToken);
    // console.log(client.api.messages.create())
    return client.api.messages
        .create({
            body: "Hello there",
            to: "+14167208996",
            from: config.sendingNumber,
        }).then(function(data) {
            console.log('Administrator notified');
        }).catch(function(err) {
            console.error('Could not notify administrator');
            console.error(err);
        });
};

exports.calculateHighest = function(req, res) {
    // Rating.find({}, function(err, rating) {
    //     for(var r in rating) {
    //
    //     }
    // });
};
