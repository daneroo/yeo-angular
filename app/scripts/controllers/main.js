'use strict';

yeoAngularApp.controller('MainCtrl', function($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Testacular'
  ];
  $scope.gridWatch = {
    stamp: ""+new Date(),
    power:{value:16439, units:'MW', level:'AVG'},
    emissions:{value:1068, units:'tonnes'},
    powerByType:[
    {kind:'Nuclear', power:10247},
    {kind:'Hydro', power:4044},
    {kind:'Gas', power:1596},
    {kind:'Coal', power:553},
    {kind:'Wind', power:550},
    {kind:'Other', power:167}
    ]
  };
  
});
