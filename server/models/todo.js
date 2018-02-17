const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const RatingSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: 'Kindly enter the name of the task'
        },
        Created_date: {
            type: Date,
            default: Date.now
        },
        status: {
            type: [{
                type: String,
                enum: ['pending', 'ongoing', 'completed']
            }],
            default: ['pending']
        }
    }
);

RatingSchema.plugin(timestamps);
RatingSchema.plugin(mongooseStringQuery);

const Rating = mongoose.model('Rating', RatingSchema);
module.exports = Rating;