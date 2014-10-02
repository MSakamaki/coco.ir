'use strict';

angular.module('cocoirApp')
  .controller('AppointurlCtrl', ['$stateParams', function ($stateParams) {
    this.mapid = $stateParams.mapid;
    this.mapurl = 'http://coco.ir/' + this.mapid;
  }]);

  // TODO: Clipbord APIを使い、なければflashを
  // .directive('coCopy', function() {
  //   return {
  //     restrict: 'E',
  //     template: '<button ng-click="hello()">クリップボードにコピー(JSでできない)</button>',
  //     link : function(scope, element, attr){
  //       console.log(attr);
  //       document.oncopy = function(event){
  //           //通常のコピーイベントをキャンセル
  //           event.preventDefault();
  //           //clipboard APIで代替のデータをクリップボードにコピーする
  //           event.clipboardData.setData('text', 'コピー操作をキャンセルして代わりの文字列をコピーしました！');
  //       };
  //       element[0].addEventListener("copy", function(e){
  //         console.log("copy action, " ); 
  //         e.clipboardData.setData("text/plain", attr['url']);
  //       }, false);
  //       scope.hello = function(){
  //         console.log("hello, " ); 
  //         document.execCommand('copy');
  //       };
  //     },
  //   };
  // });
