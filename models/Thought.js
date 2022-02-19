const {Schema, model, Types} = require('mongoose');
//use moment instead of built in JS date
const moment = require('moment');
const reactionSchema = require('./Reaction');
  
//thoughtSchema model
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    // use reactionsSchema to validate data for a reply
    reactions: [reactionSchema]
}, 
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});
  
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
  
const Thought = model('Thought', ThoughtSchema);

//export for global use
module.exports = Thought;