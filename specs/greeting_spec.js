describe('Greeting Controller', function() {
	var $scope;

	beforeEach(inject(function($rootScope, $controller) {
		var configuration;
		$scope = $rootScope.$new();
		configuration = { $scope : $scope };
		$controller('GreetingController', configuration);
	}));

    it('should have name in controller as May by default', function() {
        expect($scope.getName()).toEqual('May');
    });

    it('should have name in controller as Jua', function() {
    	$scope.nickName = 'Jua';
        expect($scope.getName()).toEqual('Jua');
    });

    it('should clear name in text box when clear button is clicked', function(){
    	$scope.clear();
    	expect($scope.getName()).toEqual('');
    });
});

