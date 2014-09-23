'use strict';

angular.module('cocoirApp')
  .factory('mapacckey', function () {
    var SESSION_KEY = 'MAPACCESS';

    // Public API here
    return {
      SaveLocationAccessKey: function () {
        sessionStorage.setItem(SESSION_KEY,
          location.pathname.replace(/(.)(.+?)/,"$2"));
      },
      get: function(){
        return sessionStorage.getItem(SESSION_KEY);
      }
    };
  });
