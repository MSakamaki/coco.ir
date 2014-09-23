'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('appointmap', {
        url: '/appoint/:mapid',
        templateUrl: 'apo/appointmap/appointmap.html',
        controller: 'AppointmapCtrl'
      });
  });