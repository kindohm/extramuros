(function () {

	var app = angular.module('extramurosApp');

	app.controller('MainController', function () {

		this.boxes = [];

		this.message = 'hello';

		this.addBox = function () {
			var num = this.boxes.length + 1;
			this.boxes.push({
				id: 'edit' + num.toString(),
				text: 'testing'
			});
		};

		this.addBox();
		this.addBox();

	});

})();
