(function() {

	angular
		.module("monkeyFacts")
		.controller("quizCtrl", QuizController);
		QuizController.$inject = ['$scope', 'quizMetrics', 'dataService']
		
	function QuizController($scope, quizMetrics, dataService) {
		$scope.quizMetrics = quizMetrics;
		$scope.dataService = dataService;
		
		$scope.questionAnswered = questionAnswered;
		$scope.setActiveQuestion = setActiveQuestion;
		$scope.selectAnswer = selectAnswer;
		$scope.finaliseAnswers = finaliseAnswers;
		
		$scope.activeQuestion = 0;
		var numQuestionsAnswered = 0;
		$scope.error = false;
		$scope.finalise = false;
		
		function setActiveQuestion(index) {
		
			if(index === undefined) {
				var breakOut = false;
				var quizLength = dataService.quizQuestions.length - 1;
			
				while(!breakOut) {
				$scope.activeQuestion = $scope.activeQuestion < quizLength?++ $scope.activeQuestion:0;
				
					if($scope.activeQuestion === 0) {
						$scope.error = true;
					}
					
					if(dataService.quizQuestions[$scope.activeQuestion].selected === null) {
						breakOut = true;
					}
				}
			} else {
				$scope.activeQuestion = index;
			}
			
		}
		
		function questionAnswered() {
		
			var quizLength = dataService.quizQuestions.length;
			
			if(dataService.quizQuestions[$scope.activeQuestion].selected !== null) {
				numQuestionsAnswered++;
				if(numQuestionsAnswered >= quizLength) {
					//finalise quiz
					for(var i = 0; i < quizLength; i++) {
						if(dataService.quizQuestions[i].selected == null) {
							setActiveQuestion(i);
							return;
						}
					}
					$scope.error = false;
					$scope.finalise = true;
					return;
				}
			}
			$scope.setActiveQuestion();
		}
		
		function selectAnswer(index) {
			dataService.quizQuestions[$scope.activeQuestion].selected = index;
		}
		
		function finaliseAnswers() {
			$scope.finalise = false;
			numQuestionsAnswered = 0;
			$scope.activeQuestion = 0;
			quizMetrics.markQuiz();
			quizMetrics.changeState("quiz", false);
			quizMetrics.changeState("results", true);
		}
	}
})();