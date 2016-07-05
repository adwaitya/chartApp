
(function(){
	'use strict';

	angular.module('chartApp')
			.controller("ChartController",ChartController);

			ChartController.$inject = ['ChartService'];
			function ChartController(ChartService){
				var vm = this;
				vm.title ="Chart App";

				 vm.colors = ChartService.getColors;	
				 vm.chartData = ChartService.getChartData;
                  
			}
})();