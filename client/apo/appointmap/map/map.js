'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('map', {
        url: '/map',
        templateUrl: 'apo/appointmap/map/map.html',
        controller: 'MapCtrl'
      });
  });