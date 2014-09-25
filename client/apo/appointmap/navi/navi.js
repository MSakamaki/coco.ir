'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('navi', {
        url: '/navi',
        templateUrl: 'apo/appointmap/navi/navi.html',
        controller: 'NaviCtrl'
      });
  });