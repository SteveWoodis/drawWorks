var app = angular.module('drawWorksApp');
app.controller('landingCtrl', function($scope, envService, $location){
        
    $location.path('/landing');
    
})