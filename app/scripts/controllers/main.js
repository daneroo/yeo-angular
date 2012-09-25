'use strict';

yeoAngularApp.controller('MainCtrl', function($scope) {
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
    ],
    powerByPlant:{
      nuclear:[
      {name:'BRUCEA-G1', output:251, capacity:251},
      {name:'BRUCEA-G2', output:0, capacity:0},
      {name:'BRUCEA-G3', output:734, capacity:734},
      {name:'BRUCEA-G4', output:0, capacity:0},
      {name:'BRUCEB-G5', output:809, capacity:809},
      {name:'BRUCEB-G6', output:817, capacity:817},
      {name:'BRUCEB-G7', output:824, capacity:824},
      {name:'BRUCEB-G8', output:815, capacity:815}
      ]
    }
  };
  
  
});
