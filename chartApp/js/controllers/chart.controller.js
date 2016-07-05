
(function(){
	'use strict';

	angular.module('chartApp')
			.controller("ChartController",ChartController);

			ChartController.$inject = ['ChartService'];
			function ChartController(ChartService){
				  var vm=this;
				  vm.title ="Combination Of Bar and Line Chart";
				
				  vm.dataset = ChartService.getChartData;
			}
})();