var app = angular.module('drawWorksApp');
app.controller('conRegController', function($scope, $location, envService){
    $scope.User = {};
    $scope.regContractors = [
        {contractorId: 1, contractorName: 'General Contractor'},
        {contractorId: 2, contractorName: 'Sub-Contractor'},
        {contractorId: 3, contractorName: 'Home Owner'}
    ];
    $scope.regConstruction = [
        {constructionId: 1, constructionType: 'Commercial'},
        {constructionId: 2, constructionType: 'Residential'}
    ];

    $scope.User.reg_contractorId = 1;
    $scope.User.constructionId = 2;
    
    $scope.registerMe = function(){
        var User = $scope.User;   
        envService.createUser(User);
            $location.path('/aboutMe');
        
    }
})