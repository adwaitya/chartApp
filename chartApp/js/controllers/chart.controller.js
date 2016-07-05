
(function(){
	'use strict';

	angular.module('chartApp')
			.controller("ChartController",ChartController);

			
			function ChartController(){
				  var vm=this;
				  vm.title ="Combination Of Bar and Line Chart";
				  vm.colors = ['#45b7cd', '#ff6384', '#ff8e72'];

				  vm.labels = ['January','February','March','April','May','June','July'];
				  vm.data = [
				    [65, -59, 80, 81, -56, 55, -40],
				    [28, 48, -40, 19, 86, 27, 90]
				  ];
				  vm.datasetOverride = [
				    {
				      label: 'Series A',
				      borderWidth: 1,
				      type: 'bar'
				    },
				    {
				      label: ' Series B',
				      borderWidth: 3,
				      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
				      hoverBorderColor: 'rgba(255,99,132,1)',
				      type: 'line'
				    }
				  ];	

			}
})();