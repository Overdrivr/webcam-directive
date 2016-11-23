'use strict';

angular
  .module('webcamTestApp', [
    'webcam'
  ])
  .controller('webcamTestController', function(webcam){
    console.log("I'm live");
  });
