var app = angular.module('drawWorksApp');
app.controller('submitbidsCtrl', function($scope, $firebaseObject, editBidAmount, submitBidRef, $location, $routeParams, envService){
    var User = envService.getUser();
    $scope.bid = $firebaseObject(submitBidRef);
    User.$loaded(function(data){
        
    }); 
    $scope.User = User;

   $scope.project = $firebaseObject(editBidAmount);
       
	$scope.project.$loaded().then(function (projects) {
        $scope.ProjectTitle = $scope.project.ProjectTitle;
        $scope.Street = $scope.project.Street;
        $scope.City = $scope.project.City;
        $scope.State = $scope.project.State;
        $scope.PostalCode = $scope.project.PostalCode;
        $scope.Fax = $scope.project.Fax;
        $scope.Phone = $scope.project.Phone;
        $scope.contact = $scope.project.Contact;
        $scope.bidDate = $scope.project.BidDate;
        $scope.bidAmount = $scope.project.bidAmount;
    });
    
    $scope.submitBid = function(){
//        $scope.bid = $firebaseObject(submitBidRef);
        $scope.bid.bidAmount = $scope.User.bidAmount;
        if(User.reg_username === $scope.project.contractorId && $scope.project.bidAmount != ""){
            alert('You have already submitted a bid for this project.')
        }
        else{
        $scope.bid.$save()
       }
        $location.path('/gprojects');
    }
})