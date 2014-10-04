'use strict';

describe('Controller: AppointurlCtrl', function () {

  // load the controller's module
  beforeEach(module('cocoirApp'));

  var AppointurlCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppointurlCtrl = $controller('AppointurlCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
