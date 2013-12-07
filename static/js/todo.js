var ToDoController = function($scope) {
	var items = [
		{"title":"เรียน Angular", "done":true},
		{"title":"เรียน TDD","done":true},
		{"title":"กลับบ้าน","done":false}];
	$scope.itemName = '';

	$scope.getItemCount = function() {
		return items.length;
	};

	$scope.addItem = function() {
		if ($scope.itemName != '') {
			items.push({title:$scope.itemName, done:false})
		}
		$scope.itemName = '';
	};

	$scope.getItem = function(index) {
		return items[index];
	};

	$scope.getItems = function() {
		return items;
	};
};