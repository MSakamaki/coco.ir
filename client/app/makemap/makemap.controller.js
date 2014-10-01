'use strict';

angular.module('cocoirApp')
  .controller('MakemapCtrl', ['$state', 'mapservice',function ($state, mapservice) {
    this.create = function(){
      // サービスからKeyを取得する
      
      mapservice.getmapid()
        .$promise.then(function(data){

          mapservice.exists({ mapid: data.mapid })
            .$promise.then(function(ex){
              console.log(ex);
              $state.go('main.appointurl', {mapid: data.mapid});
            });
        });
    };
  }]);
