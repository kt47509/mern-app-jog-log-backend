const mongoose = require('mongoose');

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  distance: {
    type: Number,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model('Workout', workoutSchema)