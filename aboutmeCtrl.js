var app = angular.module('drawWorksApp');
  app.controller('aboutMeCtrl',function($scope, $q, $firebaseObject, envService){
      var User = envService.getUser(); 
    //  User.$loaded(function(data) {
    //  });
      $scope.User = User;
      $scope.updateMe = function(){
           $scope.User.$save()
      }
     
})