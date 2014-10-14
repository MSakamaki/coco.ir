'use strict';

describe('Service: appoint', function () {

  // load the service's module
  beforeEach(module('cocoirApp'));

  // instantiate service
  var appoint;
  beforeEach(inject(function (_appoint_) {
    appoint = _appoint_;
  }));

  it('should do something', function () {
    expect(!!appoint).toBe(true);
  });

});
