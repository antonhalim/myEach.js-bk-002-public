'use strict';

describe('myEach', function() {

  var myEach;
  beforeEach(function() {
    myEach = require('../lib/myEach');
  });

  it('does a thing', function() {
    expect(myEach()).toEqual(true);
  });
});
