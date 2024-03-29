'use strict';

// Declare app level module which depends on filters, and services
var yeoAngularApp = angular.module('yeoAngularApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/plants/:sourceId', {
        templateUrl: 'views/source.html', 
        controller: 'SourceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
