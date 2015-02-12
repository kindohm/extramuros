(function () {

	var app = angular.module('extramurosApp', ['ngRoute', 'gridster'])
		.config(function ($routeProvider) {

			$routeProvider.when('/', {
				templateUrl: '/browserApp/main.html',
				controller: 'MainController as main'
			});

		});

})();