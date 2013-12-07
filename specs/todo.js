describe('ToDoController', function() {
	var scope;

	beforeEach(inject(function($rootScope, $controller){
		var configuration;
		scope = $rootScope.$new();
		configuration = {$scope:scope};
		$controller('ToDoController', configuration);
	}));

	it('should contains exactly 3 items when initialized', function(){
		expect(scope.getItemCount()).toEqual(3);
	});

	it('should initialize list as undone, undone and done respectively', function(){
		expect(scope.getItem(0).done).toEqual(true);
		expect(scope.getItem(1).done).toEqual(true);
		expect(scope.getItem(2).done).toEqual(false);
	});

	it('should initialize list as เรียน Angular, เรียน TDD and กลับบ้าน respectively', function() {
		expect(scope.getItem(0).title).toEqual("เรียน Angular");
		expect(scope.getItem(1).title).toEqual("เรียน TDD");
		expect(scope.getItem(2).title).toEqual("กลับบ้าน");
	});

	it('should contains exactly 4 items when one new item is added', function(){
		scope.itemName = 'test';
		scope.addItem();

		expect(scope.getItemCount()).toEqual(4);
	});

	it('should set new item title as specified', function(){
		scope.itemName = 'test';
		scope.addItem();
		expect(scope.getItem(scope.getItemCount() - 1).title).toEqual('test');
	});

	it('should set new item as undone', function() {
		scope.itemName = '';
		scope.addItem();
		expect(scope.getItem(scope.getItemCount() - 1).done).toEqual(false);
	});

	it('should return null if refer to out-of-bound index', function(){
		expect(scope.getItem(-1)).toEqual(null);
		expect(scope.getItem(scope.getItemCount())).toEqual(null);
	});

	it('should clear input content when item is added', function(){
		scope.itemName = 'test';
		scope.addItem();
		expect(scope.itemName).toEqual('');
	});

	it('should not add any item if text is empty', function(){
		var itemCount;
		itemCount = scope.getItemCount();
		scope.itemName = '';
		scope.addItem();
		expect(scope.getItemCount()).toEqual(itemCount);
	});
});