'use strict';

describe('Controller: SourceCtrl', function() {

  // load the controller's module
  beforeEach(module('yeoAngularApp'));

  var SourceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    SourceCtrl = $controller('SourceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
