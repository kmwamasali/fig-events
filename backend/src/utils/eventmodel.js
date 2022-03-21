//Import the mongoose module
const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: String,
  description: String,
  category: String,
  date: Date,
  isVirtual: Boolean,
  address: String,
});

// Compile model from schema
const EventModel = mongoose.model('Event', EventSchema );

module.exports = EventModel;