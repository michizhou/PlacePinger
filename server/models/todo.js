const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const RatingSchema = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
            trim: true,
        },
        status: {
            type: String,
            required: true,
            enum: ['pending', 'complete', 'in progress', 'overdue'],
            default: 'pending',
        },
    },
    { minimize: false },
);

RatingSchema.plugin(timestamps);
RatingSchema.plugin(mongooseStringQuery);

const Rating = mongoose.model('Rating', RatingSchema);
module.exports = Rating;