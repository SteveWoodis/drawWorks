var app = angular.module('drawWorksApp');
app.controller('myCurrentProjectsCtrl', function($scope, getProjectsRef, $firebaseArray, $location, envService){
    var User = envService.getUser();
    //User.$loaded(function(data){
        
    //}); 
    $scope.User = User;
    console.log($scope.User);
	$scope.projects = $firebaseArray(getProjectsRef);
    console.log($scope.projects);
//	$scope.projects.$loaded().then(function (projects) {
//       
//    });
    
    $scope.createProjects = function(){   
		$location.path('/createProjects');
	}
}) 