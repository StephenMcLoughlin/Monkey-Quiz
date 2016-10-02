(function() {

	angular
		.module("monkeyFacts")
		.controller("resultsCtrl", resultsController);
		
		resultsController.$inject = ['$scope', 'quizMetrics', 'dataService'];
		
		function resultsController($scope, quizMetrics, dataService) {
			$scope.quizMetrics = quizMetrics;
			$scope.dataService = dataService;
			$scope.setActiveQuestion = setActiveQuestion;
			$scope.activeQuestion = 0;
			$scope.getAnswerClass = getAnswerClass
			$scope.calculatePerc = calculatePerc;
			$scope.reset = reset;
			
			function calculatePerc() {
				return quizMetrics.numCorrect/dataService.quizQuestions.length * 100;
			}
			
			function setActiveQuestion(index) {
				$scope.activeQuestion = index; 
			}
			
			function getAnswerClass(index) {
			
				if(index == quizMetrics.correctAnswers[$scope.activeQuestion]) {
					
					return "bg-success";
					
				} else if(index == dataService.quizQuestions[$scope.activeQuestion].selected) {
				
					return "bg-danger";
				}
			
			}
			
			function showResults() {
			
			}
			
			function reset() {
				quizMetrics.changeState("results", false);
				quizMetrics.numCorrect = 0;
				
				for(var i = 0; i < dataService.quizQuestions.length; i++) {
					var data = dataService.quizQuestions[i];
					data.selected = null;
					data.correct = null;
				}
			}
		
			
		}
})();