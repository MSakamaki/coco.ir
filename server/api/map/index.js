'use strict';

var express = require('express');
var controller = require('./map.controller');

var router = express.Router();

router.head('/:id', controller.exist);

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.put('/:id/knock', controller.update_knock);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;