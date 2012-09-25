'use strict';

yeoAngularApp.controller('MainCtrl', function($scope) {
  $scope.gridWatch = {
    stamp: ""+new Date(),
    power:{value:16439, units:'MW', level:'AVG'},
    emissions:{value:1068, units:'tonnes'},
    powerByType:[
    {name:'Nuclear', power:10247},
    {name:'Hydro', power:4044},
    {name:'Gas', power:1596},
    {name:'Coal', power:553},
    {name:'Wind', power:550},
    {name:'Other', power:167}
    ]
  };
  
  
});
