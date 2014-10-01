'use strict';

angular.module('cocoirApp')
  .controller('AppointurlCtrl', ['$stateParams', function ($stateParams) {
    this.mapid = $stateParams.mapid;
    console.log(this.mapid);
  }]);
