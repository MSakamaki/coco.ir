'use strict';

angular.module('cocoirApp')
  .factory('mapacckey', function () {
    var SESSION_KEY = 'MAPACCESS';
    
    // Public API here
    return {
      get: function(){
        return sessionStorage.getItem(SESSION_KEY);
      }
    };
  });
