var app = angular.module('drawWorksApp');
app.controller('MyWorkspace', function($scope, $http){

      $http.get("http://www.w3schools.com/angular/customers.php")
    .then(function (response) {$scope.names = response.data.records;});

})


app.controller('customersCtrl', function($scope, $http) {
    
});