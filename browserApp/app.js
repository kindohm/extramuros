(function () {

	var app = angular.module('extramurosApp', ['ngRoute', 'gridster', 'xeditable', 'ui.bootstrap'])
		.config(function ($routeProvider) {

			$routeProvider.when('/', {
				templateUrl: '/browserApp/main.html',
				controller: 'MainController as main'
			});

		});
})();