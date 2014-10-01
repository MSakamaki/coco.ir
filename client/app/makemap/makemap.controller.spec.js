'use strict';

describe('Controller: MakemapCtrl', function () {

  // load the controller's module
  beforeEach(module('cocoirApp'));

  var MakemapCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MakemapCtrl = $controller('MakemapCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
