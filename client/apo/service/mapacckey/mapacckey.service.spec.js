'use strict';

describe('Service: mapacckey', function () {

  // load the service's module
  beforeEach(module('cocoirApp'));

  // instantiate service
  var mapacckey;
  beforeEach(inject(function (_mapacckey_) {
    mapacckey = _mapacckey_;
  }));

  it('should do something', function () {
    expect(!!mapacckey).toBe(true);
  });

});
