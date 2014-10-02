'use strict';

angular.module('cocoirApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'angular.zeroclipboard'
])
  .config([   '$stateProvider','$urlRouterProvider', '$locationProvider', '$httpProvider', 'uiZeroclipConfigProvider'
    ,function ($stateProvider,  $urlRouterProvider ,  $locationProvider,   $httpProvider,   uiZeroclipConfigProvider) {
    $urlRouterProvider
      .otherwise('/main');

    $stateProvider
      .state('main', {
        url: '/main',
        views: {
          'navi':{
            templateUrl: 'components/navbar/navbar.html'
          },
          'content': {
            templateUrl: 'app/main/main.html'
          },
          'foot': {
            templateUrl: 'components/footer/footer.html'
          }
        }
      });
    // zeroclip setting
    uiZeroclipConfigProvider.setZcConf({
      moviePath: 'bower_components/zeroclipboard/ZeroClipboard.swf'
    });
    uiZeroclipConfigProvider.setOptions({
      buttonText: 'Copy Me!',
      emitEvent: true
    });

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  }])

  .factory('authInterceptor', function ($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function ($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  });