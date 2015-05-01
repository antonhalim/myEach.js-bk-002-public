'use strict';

describe('myEach', function() {
  it('should call the function three times with each element of the array', function() {
    spyOn(console, 'log');

    myEach([1,2,3], function(e) {console.log(e)});
    expect(console.log).toHaveBeenCalledWith(1);
    expect(console.log).toHaveBeenCalledWith(2);
    expect(console.log).toHaveBeenCalledWith(3);
  });
});
