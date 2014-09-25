'use strict';

angular.module('cocoirApp')
  .controller('AppointmapCtrl', function ($scope, socket) {
    $scope.message = 'Hello';
    


    socket.syncUpdates('appointment', $scope.message);

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('appointment');
    });
  });
