(function () {

	function openEditor(name) {
		sharejs.open(name, 'text', function (error, doc) {
			if (error) {
				console.log(error);
			}
			else {
				var elem = document.getElementById(name);
				doc.attach_textarea(elem);
			}
		});
	}


	var app = angular.module('extramurosApp');
	app.controller('BoxController', function ($scope, $http) {
		openEditor($scope.box.id);

		$scope.postSignal = function () {
			postSignal($scope.box.id);
		};

		function postSignal(name) {
			var password = document.getElementById('password').value;
			if(password == null || password == "") {
				alert("You must enter a password to evaluate code.");
			}
			else {
				$.post(name + "-" + password);
					//.success(function(){
					//	console.log('post success');
					//})
					//.error(function(){
					//	console.error('post error');
					//});
			}
		}


	});



})();