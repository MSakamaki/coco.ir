'use strict';

describe('Controller: NaviCtrl', function () {

  // load the controller's module
  beforeEach(module('cocoirApp'));

  var NaviCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NaviCtrl = $controller('NaviCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
