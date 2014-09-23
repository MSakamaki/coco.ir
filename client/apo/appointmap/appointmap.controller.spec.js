'use strict';

describe('Controller: AppointmapCtrl', function () {

  // load the controller's module
  beforeEach(module('cocoirApp'));

  var AppointmapCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AppointmapCtrl = $controller('AppointmapCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
