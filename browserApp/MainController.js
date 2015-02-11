(function () {

	var app = angular.module('extramurosApp');

	app.controller('MainController', function () {

		this.boxes = [];

		this.message = 'hello';

		this.addBox = function () {
			var num = this.boxes.length + 1;
			this.boxes.push({
				id: 'edit' + num.toString(),
				evalId: 'eval' + num.toString(),
				name: 'Editor ' + num.toString()
			});
		};

		this.addBox();
		this.addBox();

	});

})();
