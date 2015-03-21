var app = angular.module('drawWorksApp');
app.controller('createbidsCtrl',function($scope,$location, createProjectsRef, $firebaseArray){
     $scope.projects = $firebaseArray(createProjectsRef)
     

    
    $scope.createBid = function(){
//        console.log($scope.User)
        $scope.User.bidAmount = 1
        $scope.projects.$add($scope.User);
        $location.path('/gprojects');
        
    }
    

})



