'use strict';

angular.module('cocoirApp')
  .controller('MakemapCtrl', ['$state' ,function ($state) {
    this.create = function(){
      // サービスからKeyを取得する
      $state.go('main.appointurl', {mapid: 'XXXXXXXXXXXXX'});
    };
  }]);
