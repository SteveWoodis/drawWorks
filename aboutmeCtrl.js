var app = angular.module('drawWorksApp');
  app.controller('aboutMeCtrl',function($scope, $q, envService){

      var User = envService.getUser(); 
      User.$loaded(function(data) {
      });
      $scope.User = User;
      
      $scope.updateMe = function(){
       console.log('you made it to the Save function ');   
      }
     
})