'use strict';

yeoAngularApp.controller('SourceCtrl', function($scope,$routeParams) {
  $scope.name = $routeParams.sourceId;
  $scope.sourceId = $scope.name.toLowerCase();
  var powerByPlant={
    nuclear:[
    {name:'BRUCEA-G1', output:251, capacity:251},
    {name:'BRUCEA-G2', output:0, capacity:0},
    {name:'BRUCEA-G3', output:734, capacity:734},
    {name:'BRUCEA-G4', output:0, capacity:0},
    {name:'BRUCEB-G5', output:809, capacity:809},
    {name:'BRUCEB-G6', output:817, capacity:817},
    {name:'BRUCEB-G7', output:824, capacity:824},
    {name:'BRUCEB-G8', output:815, capacity:815},
    {name:'DARLINGTON-G1', output:876, capacity:876},
    {name:'DARLINGTON-G2', output:885, capacity:885},
    {name:'DARLINGTON-G3', output:879, capacity:879},
    {name:'DARLINGTON-G4', output:882, capacity:882},
    {name:'PICKERINGA-G1', output:423, capacity:425},
    {name:'PICKERINGA-G4', output:520, capacity:542},
    {name:'PICKERINGB-G5', output:506, capacity:510},
    {name:'PICKERINGB-G6', output:517, capacity:525},
    {name:'PICKERINGB-G7', output:0, capacity:0},
    {name:'PICKERINGB-G8', output:509, capacity:509},
    ],
    hydro:[
    {name:'ABKENORA', output:5, capacity:13},
    {name:'AGUASABON', output:0, capacity:23},
    {name:'ALEXANDER', output:50, capacity:55},
    {name:'APIROQUOIS', output:39, capacity:70},
    {name:'ARNPRIOR', output:38, capacity:38},
    {name:'AUBREYFALLS', output:0, capacity:164},
    ],
    gas:[
    {name:'BRIGHTON BEACH', output:0, capacity:580},
    ],
    coal:[
    {name:'ATIKOKAN-G1', output:0, capacity:0},
    ],
    wind:[
    {name:'AMARANTH', output:59, capacity:200},
    ],
    other:[
    {name:'CALSTOCKGS', output:30, capacity:38},
    ],
  };
  $scope.powerByPlant = powerByPlant[$scope.sourceId];
});
