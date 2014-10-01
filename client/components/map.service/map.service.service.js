'use strict';

angular.module('cocoirApp')
  .factory('mapservice', ['$resource','$log', '$q', function ($resource, $log, $q) {

    return $resource('/api/maps/:mapid',{mapid:'@mapid'},
      { 
        'getmapid': { method:'GET' },
        'exists': { method: 'HEAD' }
      });
  }]);
