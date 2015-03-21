var app = angular.module('drawWorksApp');
app.controller('loginController',function($scope, envService, $location){
	  $scope.User = {};
    $scope.logMeIn = function(){
       
        var User = $scope.User;
        //var username = $scope.User.reg_email;
		envService.authUserName(User).then(function(res){
         
        })
        $scope.reg_email = '';
        $scope.reg_username = '';
        $scope.reg_password = '';
		
	}
    $scope.registerMe = function(){
     //envService.createUser($scope.reg_email, $scope.reg_password, $scope.reg_username);
        console.log('I am in registerMe');
      $location.path('/registration'); 
        
    }
     
    
})