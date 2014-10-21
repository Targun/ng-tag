var app = angular.module('ngTag');

app.controller('mainCtrl', function ($scope) {
		
	$scope.parents = [];
	$scope.children = [];
	$scope.bucket = [];
	$scope.selectBoxes = true;

	var addParents = function(data){
		for(var i = 0; i < data.length; i++){
			$scope.parents.push(data[i]);
		}
	}
	addParents(industries);

	$scope.showChildren = function(parentData){
		$scope.children = [];
		arr = parentData.children;
		for(var i = 0; i < arr.length; i++){
			$scope.children.push(arr[i]);
		}
	}

	$scope.addToBucket = function(childData){
		arr = $scope.children;
		for(var i = 0; i < arr.length; i++){
			if(arr[i].name === childData.name){
				$scope.children.splice(i, 1);
			}
		}
		$scope.bucket.push(childData);
		if($scope.bucket.length > 2){
			$scope.selectBoxes = false;
		}
	}

	$scope.removeFromBucket = function(bucketData){
		arr = $scope.bucket;
		for(var i = 0; i < arr.length; i++){
			if(arr[i].name === bucketData.name){
				$scope.children.unshift(arr[i]);
				$scope.bucket.splice(i, 1);
			}
		}
		if($scope.bucket.length < 3){
			$scope.selectBoxes = true;
		}
	}

});













		// $scope.industries =[
		// 	{name: "Aerospace & Defense"},
		// 	{name: "Automobiles, Boats & Motor Vehicles"},
		// 	{name: "Chemicals & Petrochemicals"},
		// 	{name: "Heavy Machinery"},
		// 	{name: "Textiles, Apparel & Accessories"},
		// 	{name: "Tools, Hardware & Light Machinery"},
		// 	{name: "Concrete, Glass & Building Materials"},
		// 	{name: "Furniture"},
		// 	{name: "Plastics & Rubber"},
		// 	{name: "Farming, Mining Machinery & Equipment"},
		// 	{name: "Food Products & Packaging"},
		// 	{name: "Manufacturing Other"}
		// ];