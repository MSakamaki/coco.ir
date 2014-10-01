'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.makemap', {
        url: '/makemap',
        views: {
          'content@': {
            templateUrl: 'app/makemap/makemap.html',
            controller: 'MakemapCtrl',
            controllerAs: 'makemap'
          }
        }
      });
  });