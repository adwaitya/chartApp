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
         data: [[5,10,6,7,2,45,23],[52,120,26,72,22,12,33]],
         series: ["2015","2016"],
         colors: [{fillColor:["#FF0000", "#00FF00", "#0000FF", "#00FFFF", "#FFFF00","#00ADF9", "#DCDCDC", "#46BFBD"]}],
         options: {barShowStroke : false},
         datasetOverride:[
						      {
						        label: "Bar chart",
						        borderWidth: 1,
						        type: 'bar'
						      },
						      {
						        label: "Line chart",
						        borderWidth: 3,
						        hoverBackgroundColor: "rgba(255,99,132,0.4)",
						        hoverBorderColor: "rgba(255,99,132,1)",
						        type: 'line'
						      }
				]
      };
                  
})();