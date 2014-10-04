'use strict';

var _ = require('lodash');
var Map = require('./map.model');

var randobet = function(n, b) {
  b = b || '';
  var a = 'abcdefghijklmnopqrstuvwxyz'
    + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    + '0123456789'
    + b;
  a = a.split('');
  var s = '';
  for (var i = 0; i < n; i++) {
      s += a[Math.floor(Math.random() * a.length)];
  }
  return s;
};

// Get list of maps
exports.index = function(req, res) {
  // ランダムX桁URL生成
  var rnum = randobet(100);

  // MongoDBへの登録
  Map.create({ mapid: rnum }, function(err, map) {
    if(err) { return handleError(res, err); }
    return res.json(200, {mapid: rnum});
  });
};

exports.exist = function(req, res) {
  // ランダムURLの存在確認
  exports._existPromise(req.params.id).then(function(map){
    if (!map) return res.json(404);
    return res.json(200);
  });
  return res.json(404);
};

// Mapのpromiseを返す
exports._existPromise = function(id) {
  // ランダムURLの存在確認
  return Map.find({ mapid: id }).exec();
};


// Get a single map
exports.show = function(req, res) {
  Map.findById(req.params.id, function (err, map) {
    if(err) { return handleError(res, err); }
    if(!map) { return res.send(404); }
    return res.json(map);
  });
};

// Creates a new map in the DB.
exports.create = function(req, res) {
  Map.create(req.body, function(err, map) {
    if(err) { return handleError(res, err); }
    return res.json(201, map);
  });
};

// Updates an existing map in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Map.findById(req.params.id, function (err, map) {
    if (err) { return handleError(res, err); }
    if(!map) { return res.send(404); }
    var updated = _.merge(map, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, map);
    });
  });
};

exports.update_knock = function(req, res){
  if(req.body._id) { delete req.body._id; }
  console.log('knock');
  Map.findById(req.params.id, function (err, map) {
    if (err) { return handleError(res, err); }
    if(!map) { return res.send(404); }
    var updated = _.merge(map, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, map);
    });
  });
};

// Deletes a map from the DB.
exports.destroy = function(req, res) {
  Map.findById(req.params.id, function (err, map) {
    if(err) { return handleError(res, err); }
    if(!map) { return res.send(404); }
    map.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}