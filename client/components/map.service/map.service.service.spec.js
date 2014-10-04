'use strict';

describe('Service: map.service', function () {

  // load the service's module
  beforeEach(module('cocoirApp'));

  // instantiate service
  var map.service;
  beforeEach(inject(function (_map.service_) {
    map.service = _map.service_;
  }));

  it('should do something', function () {
    expect(!!map.service).toBe(true);
  });

});
