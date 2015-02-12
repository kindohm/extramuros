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
		openEditor($scope.box.titleId);

		$scope.postSignal = function () {
			doEval();
		};

		var ctrlDown = false;
		var enterDown = false;
		var waitEval = false;

		function doEval(){
			postSignal($scope.box.id);
		}

		function doFade(){
			$('#' + $scope.box.id).clearQueue().queue(function (next) {
				$(this).addClass("evaled"); next();
			}).delay(400).queue(function (next) {
				$(this).removeClass("evaled"); next();
			});
		}

		$scope.handleKeydown = function (event) {
			var key = event.which || event.keyCode;
			if (key === 17) {
				ctrlDown = true;
			} else if (key === 13) {
				enterDown = true;
			}

			if (ctrlDown && enterDown && !waitEval){
				waitEval = true;
				doEval();
			}
		};

		$scope.handleKeyup = function (event) {
			var key = event.which || event.keyCode;
			if (key === 17) {
				ctrlDown = false;
			} else if (key === 13) {
				enterDown = false;
			}
			waitEval = false;
		};

		$scope.errorText = '';

		function postSignal(id) {
			var password = document.getElementById('password').value;
			if (password == null || password == "") {
				$scope.errorText = 'You must enter a password first.';
			}
			else {
				$scope.errorText = '';
				$http.post(id + "-" + password)
					.error(function(){
						$scope.errorText = 'Eval failed. Probably wrong password.';
					});
				doFade();
			}
		}
	});

})();