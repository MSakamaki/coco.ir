'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MapSchema = new Schema({
  mapid: String,
  member: Array,
  create_date: Date,
  active: Boolean
});

module.exports = mongoose.model('Map', MapSchema);