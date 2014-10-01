'use strict';

angular.module('cocoirApp')
  .controller('NaviCtrl', function () {
    this.menu = [{
      'title': 'Knock in',
      'link': '/'
    }];

    this.isCollapsed = true;
  });
