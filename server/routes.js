/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

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
  app.route('/[a-zA-Z0-9]{13}').get(function(req,res){
    console.log (req.originalUrl);
    // sItw9ss743lke

    // 存在しないデータにアクセスされた場合は、TOP画面に飛ばす。
    if (req.originalUrl == '/ppppppppppppp') {
      res.sendfile(app.get('appPath') + '/index.html');
    }else{
      // site sucess
      res.sendfile(app.get('appPath') + '/appointment.html');      
    }
  });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
