'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('content.map', {
        //abstract: true,
        url: '/{mapid:[a-zA-Z]{13}}',
        //template: '<div>Template View</div>',
        //controller: 'ContentCtrl',
        views: {
          '':{
            template: '<div>Template View</div>'
          },
          'navi': {
            templateUrl: 'apo/content/navi/navi.html',
            controller: 'NaviCtrl'
          },
          'content': {
            template: '<div> Main Body Detail</div>'
          },
          'foot': {
            templateUrl: 'apo/content/footer/footer.html',
            controller: 'FooterCtrl'
          }
        }
      });
  });