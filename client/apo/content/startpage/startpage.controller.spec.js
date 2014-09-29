'use strict';

describe('Controller: StartpageCtrl', function () {

  // load the controller's module
  beforeEach(module('cocoirApp'));

  var StartpageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StartpageCtrl = $controller('StartpageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
