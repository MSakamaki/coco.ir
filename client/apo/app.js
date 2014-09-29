'use strict';

angular.module('cocoirApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    // 初回アクセス時のキーを保持
    //mapacckeyProvider.SaveLocationAccessKey();
    var sessionkey = location.pathname.replace(/(.)(.+?)/,"$2");
    sessionStorage.setItem('MAPACCESS',sessionkey);
    
    $urlRouterProvider
      .otherwise('/map/' + sessionkey + '/knock');

    $stateProvider
      .state('content', {
        abstract: true,
        url: '/map',
        templateUrl: 'apo/main.html'
      });

    $locationProvider.html5Mode(true);
    //$httpProvider.interceptors.push('authInterceptor');
  });
/*
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
      //console.log($location);
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  })*/