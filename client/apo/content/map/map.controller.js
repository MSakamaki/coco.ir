'use strict';

angular.module('cocoirApp')
  .controller('MapCtrl', ['$stateParams', function ( $stateParams) {
    this.uname = $stateParams.uname;
  }]);
