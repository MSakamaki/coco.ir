'use strict';

angular.module('cocoirApp')
  .controller('MainCtrl', function ($scope, mapacckey) {
    $scope.message = 'Hello';
    $scope.mapkey = mapacckey.get();
  });
