var fs = require('fs');

function formatMessage(errorToReport) {
    return '[This is a test] ALERT! It appears the server is' +
        'having issues. Exception: ' + errorToReport +
        '. Go to: http://newrelic.com ' +
        'for more details.';
};

exports.notifyOnError = function(phoneNumber, appError, request, response, next) {
    // admins.forEach(function(admin) {
    console.log("in the notify");
    var messageToSend = formatMessage(appError.message);
    // twilioClient.sendSms("+14167208996", messageToSend);
    // });
    next(appError);
};