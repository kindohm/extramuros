(function () {

	function openEditor(id) {
		sharejs.open(id, 'text', function (error, doc) {
			if (error) {
				console.log(error);
			}
			else {
				var elem = document.getElementById(id);
				doc.attach_textarea(elem);
			}
		});
	}


	var app = angular.module('extramurosApp');

	app.controller('BoxController', function ($scope, $http) {
		openEditor($scope.box.id);

		$scope.postSignal = function () {
			postSignal($scope.box.evalId);
		};

		function postSignal(evalId) {
			var password = document.getElementById('password').value;
			if(password == null || password == "") {
				alert("You must enter a password to evaluate code.");
			}
			else {
				$http.post(evalId + "-" + password);
			}
		}
	});

})();