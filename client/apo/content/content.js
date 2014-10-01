'use strict';

angular.module('cocoirApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('content.map', {
        url: '/{mapid:[a-zA-Z0-9]{13}}',
        views: {
          '':{
            template: '<div>Template View</div>'
          },
          'navi': {
            templateUrl: 'components/navbar/navbar.html'
          },
          'content': {
            template: '<div> Main Body Detail</div>'
          },
          'foot': {
            templateUrl: 'components/footer/footer.html'
          }
        }
      });
  });