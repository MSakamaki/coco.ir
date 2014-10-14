'use strict';

angular.module('cocoirApp')
  .controller('MapCtrl', ['$stateParams', 'appoint', 'mapacckey', function ($stateParams, appoint, mapacckey) {
    this.uname = $stateParams.uname;
    console.log(appoint);
    var x = appoint({ mapid: mapacckey.get() });
    console.log(x);
  }]);
