'use strict';

angular.module('cocoirApp')
  .factory('appoint', ['$resource', function ($resource) {
    // Service logic
    return $resource( 'api/maps/:mapid', { mapid: '@mapid' });
  }]);

