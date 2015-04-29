var app = angular.module('drawWorksApp');
app.controller('loginController',function($scope, $rootScope, envService, $location){
	  $scope.User = {};
      var User = "";
      $scope.logMeIn = function(){
          if ($scope.reg_email === ""){
              alert('Please type a valid email');
          }
        var User = $scope.User;
		envService.authUserName(User).then(function(res){
         
        })
        $scope.reg_email = '';
        $scope.reg_password = '';
	}
    console.log('THe user is ', User.uid);  
      
    $scope.registerMe = function(){
      $location.path('/registration'); 
        
    }
    
    $scope.logOut = function(){
        $location.path = '/landing';   
        console.log(User);
        $rootScope.User='';
    }
     
})