'use strict';

angular.module('cocoirApp')
  .controller('MainCtrl', function ($scope, mapacckey) {
    $scope.message = 'Hello';

    var socket = io('http://localhost:9000/socket.io-client/');
    socket.on('appointment:save', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });
    $scope.mapkey = mapacckey.get();
  });
