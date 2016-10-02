(function() {

	angular
		.module("monkeyFacts")
		.controller("listCtrl", ListController);
		
		ListController.$inject = ['$scope', 'quizMetrics', 'dataService'];
		
		function ListController($scope, quizMetrics, dataService) {
			$scope.quizMetrics = quizMetrics;
			$scope.monkeys = dataService.monkeyList;
			$scope.search="";
			$scope.activateQuiz = activateQuiz;
			
			$scope.activeMonkey = {};
			$scope.changeActiveMonkey = changeActiveMonkey;
			
			function changeActiveMonkey(index) {
				$scope.activeMonkey = index;
			}
			
			function activateQuiz() {
				$scope.quizMetrics.changeState("quiz", true);
			}
			
		}	
})();