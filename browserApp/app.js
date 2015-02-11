(function () {

	var app = angular.module('extramurosApp', ['ngRoute'])
		.config(function ($routeProvider) {

			$routeProvider.when('/', {
				templateUrl: '/browserApp/main.html',
				controller: 'MainController as main'
			});

		});

	app.controller('MainController', function($scope){
		$scope.message = 'hello';
	});

})();