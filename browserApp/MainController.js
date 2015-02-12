(function () {

	var app = angular.module('extramurosApp');

	app.controller('MainController', function ($scope, $window) {

		var self = this;
		$scope.gridsterOpts = {
			rowHeight: 195,
			swapping: true,
			minRows: 1,
			columns: 6,
			resizable: {
				enabled: true,
				handles: ['e', 'w']
			}
		};


		$scope.$watch(function(){
			return $window.innerWidth;
		}, function(value) {
			if (value <= 992){
				$scope.gridsterOpts.rowHeight = (self.showEvals ? 230 : 195);
			}else{
				$scope.gridsterOpts.rowHeight = 195;
			}
		});

		this.showEvals = true;
		this.boxes = [];

		$scope.$watch(angular.bind(this, function (showEvals) {
			return this.showEvals;
		}), function (newVal) {
			if ($window.innerWidth <= 992){
				$scope.gridsterOpts.rowHeight = (self.showEvals ? 230 : 195);
			}else{
				$scope.gridsterOpts.rowHeight = 195;
			}

		});


		this.addBox = function (chat) {

			var num = (this.boxes.length + 1).toString();
			var name;
			if (chat) {
				name = 'Chat';
			} else {
				name = 'Editor ' + num;
			}

			this.boxes.push({
				sizeX: 3,
				sizeY: 1,
				value: '',
				isChat: chat || false,
				visible: true,
				id: 'edit' + num,
				titleId: 'title' + num,
				name: name,
				highlightId: 'highlight' + num
			});
		};

		for (var i = 0; i < 9; i++) {
			this.addBox();
		}
		this.addBox(true);

	});

})();
