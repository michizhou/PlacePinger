const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const preferanceSchema = new mongoose.Schema(
    {
        name: String,
        frequency: Number,
        category: Array
    }
);

const RatingSchema = new mongoose.Schema(
    {
        clientID: {
            type: String
        },
        preferences: [preferanceSchema]

    }
);

RatingSchema.plugin(timestamps);
RatingSchema.plugin(mongooseStringQuery);

const Rating = mongoose.model('Rating', RatingSchema);
module.exports = Rating;