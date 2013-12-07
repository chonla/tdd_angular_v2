var GreetingController = function($scope) {

	$scope.nickName = 'May';

	$scope.getName = function() {
		return $scope.nickName;
	};

	$scope.clear = function() {
		$scope.nickName = '';
	};
};