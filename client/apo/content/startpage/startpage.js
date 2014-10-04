'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('content.map.startpage', {
        url: '/knock',
        views: {
          'content@content': {
            templateUrl: 'apo/content/startpage/startpage.html',
            controller: 'StartpageCtrl'
          }
        }
      });
  });