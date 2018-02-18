var config = require('../config');
var mongoose = require('mongoose');
Rating = mongoose.model('Rating');

var sendSms = function(to, nameSuggest) {
    var client = require('twilio')(config.accountSid, config.authToken);
    // console.log(client.api.messages.create())
    return client.api.messages
        .create({
            body: "Hello there, would you like " + nameSuggest,
            to: "+17023759672",
            from: config.sendingNumber,
        }).then(function(data) {
            console.log('Administrator notified');
        }).catch(function(err) {
            console.error('Could not notify administrator');
            console.error(err);
        });
};

exports.calculateHighest = function(req, res) {
    Rating.find({}, function(err, rating) {
        var categoryPreference = req.body.interest;
        var highestfrequency = -1;
        var highestObject = null;
        // console.log(req);
        for(var i=0; i<rating.length; i++) {
            var r = rating[i];
            if(r.clientID === req.body.clientID) {
                for(var j=0; j<r.preferences.length; j++) {
                    if(r.preferences[j].category.indexOf(categoryPreference) != -1) {
                        if(highestfrequency < r.preferences[j].frequency) {
                            highestfrequency = r.preferences[j].frequency;
                            highestObject = r.preferences[j].name;
                        }
                    }
                }
                break;
            }
        }

        res.sendStatus(200);

        sendSms("+17023759672", highestObject);
    });
};
