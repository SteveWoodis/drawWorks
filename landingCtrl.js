var app = angular.module('drawWorksApp');
app.controller('landingCtrl', function($scope, envService, $location){
    console.log('you are on the landing page');
    $location.path('/landing');
   envService.getUser();
    
})