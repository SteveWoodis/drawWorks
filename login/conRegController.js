var app = angular.module('drawWorksApp');
app.controller('conRegController', function($scope, envService){
    $scope.User = {};
    $scope.regContractors = [
        {contractorId: 1, contractorName: 'General Contractor'},
        {contractorId: 2, contractorName: 'Sub-Contractor'}
    ];
    $scope.User.reg_contractorId = 1;
    
    $scope.registerMe = function(){
        var User = $scope.User;   
        envService.createUser(User);
    }
})