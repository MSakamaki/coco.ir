'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('content.map.apoint', {
        url: '/apoint',
        views: {
          'content@content': {
            templateUrl: 'apo/content/map/map.html',
            controller: 'MapCtrl'
          }
        }
      });
  });