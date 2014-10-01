'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('content.map.apoint', {
        url: '/:uname',
        views: {
          'content@content': {
            templateUrl: 'apo/content/map/map.html',
            controller: 'MapCtrl',
            controllerAs: 'map'
          }
        }
      });
  });