'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'apo/main/main.html',
        controller: 'MainCtrl'
      });
  });