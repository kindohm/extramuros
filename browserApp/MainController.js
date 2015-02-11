(function () {

	var app = angular.module('extramurosApp');

	app.controller('MainController', function () {

		this.boxes = [];

		this.addBox = function () {
			if (this.boxes.length >= 9) return;
			var num = (this.boxes.length + 1).toString();
			this.boxes.push({
				id: 'edit' + num,
				evalId: 'eval' + num,
				name: 'Editor ' + num
			});
		};

		this.addBox();

	});

})();
