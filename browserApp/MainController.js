(function () {

	var app = angular.module('extramurosApp');

	app.controller('MainController', function ($scope) {

		$scope.gridsterOpts = {
			rowHeight:175,
			swapping: true,
			minRows: 1,
			columns: 6
		};

		this.boxes = [];

		this.addBox = function () {
			if (this.boxes.length >= 9) return;
			var num = (this.boxes.length + 1).toString();
			this.boxes.push({
				sizeX: 3,
				sizeY: 1,
				value: '',
				id: 'edit' + num,
				name: 'Editor ' + num
			});
		};

		for (var i = 0; i < 9; i++) {
			this.addBox();
		}

	});

})();
