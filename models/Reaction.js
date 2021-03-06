const {Schema, Types} = require('mongoose');
//use moment instead of JS built in date
const moment = require('moment');

//reactionSchema model
const reactionSchema = new Schema({
    //set id to avoid mix up with parent thought id
    reactionId: {
        type: Schema.Types.ObjectId, 
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm:a')
    }
}, 
{
    toJSON: {
        getters: true
    },
    id: false
});

//export for global use
module.exports = reactionSchema;