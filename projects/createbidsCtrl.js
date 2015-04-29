var app = angular.module('drawWorksApp');
app.controller('createbidsCtrl',function($scope,$location, createProjectsRef, envService, $firebaseArray){
    
    var contractor = envService.getUser();
    //contractor.$loaded(function(data){
        
    //}); 
    
    console.log(contractor);
    $scope.projects = $firebaseArray(createProjectsRef)
     

    
    $scope.createBid = function(){
//        console.log($scope.User)
        $scope.User.bidAmount = "";
        $scope.User.contractorId = contractor.reg_username;
        console.log($scope.User.contractorId);
        $scope.projects.$add($scope.User);
        $location.path('/gprojects');
        
    }
    

})



