'use strict';


describe('Controller: ChartController', function(){
  beforeEach(module('chartApp'));
    describe('Testing ChartController Js Controller', function(){
    var scope, ctrl;
      beforeEach( inject(function($controller,$rootScope) {
          scope = $rootScope.$new();
          ctrl = $controller('ChartController as vm', {$scope:scope});
        }));
      afterEach(function(){
        //clean up code
      });
      it('should initialize the tilte in the scope', function(){
  
          expect(scope.vm.title).toBeDefined();
        expect(scope.vm.title).toBe("Chart App");
      });
    });
});