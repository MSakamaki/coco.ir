/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var mapCtrl    = require('./api/map/map.controller');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/maps', require('./api/map'));
  app.use('/api/appointments', require('./api/appointment'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // キーアクセス
  app.route('/[a-zA-Z0-9]{100}').get(function(req,res) {
    console.log (req.originalUrl);
    //sItw9ss743lke
    var mapid = req.originalUrl.replace(/(.)(.+?)/,"$2")
    mapCtrl._existPromise(mapid).then(function(map){
      console.log ('map',map);
      if (! map) { res.sendfile(app.get('appPath') + '/index.html'); }
      if (map.length) {
        res.sendfile(app.get('appPath') + '/appointment.html'); 
      }else{
        // site sucess
        res.sendfile(app.get('appPath') + '/index.html');
      }
    });
  });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
