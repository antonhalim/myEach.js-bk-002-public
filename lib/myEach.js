'use strict';

function myEach(array, command){
  var i = 0;
  while (i < array.length){
      command(array[i]);
      i++;
  }
};
