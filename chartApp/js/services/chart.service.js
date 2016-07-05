(function(){
	'use strict';
	angular.module('chartApp')
			.factory('ChartService',ChartService);
		ChartService.$inject = ['$q'];

		function ChartService($q){
			var service = {};

			service.getChartData = getChartData;
			
			return service;


		}

	
      	var getChartData = {
         label: ['January','February','March','April','May','June','July'],
         data:[
				    [65, -59, 80, 81, -56, 55, -40],
				    [28, 48, -40, 19, 86, 27, 90]
				  ],
         series: ["2015","2016"],
         colors: ['#45b7cd', '#ff6384', '#ff8e72'],
        
         datasetOverride :[
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
				  ]	
      };
                  
})();