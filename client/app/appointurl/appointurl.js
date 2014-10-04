'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.appointurl', {
        url: '/待ち受けURL/:mapid',
        views: {
          'content@': {
            templateUrl: 'app/appointurl/appointurl.html',
            controller: 'AppointurlCtrl',
            controllerAs: 'appointurl'
          }
        }
      });
  });