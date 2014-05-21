'use strict';

describe('myEach', function() {

  var myEach;
  beforeEach(function() {
    myEach = require('../lib/myEach');
    foo = {
      work: function(value) {
      }
    };

    spyOn(foo, 'setBar');
  });

  it('should call the function three times with each element of the array', function() {
    myEach([1,2,3], work);
    expect(foo.work.calls.count()).toEqual(3);
  });
});
