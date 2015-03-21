var app = angular.module('drawWorksApp');
app.controller('submitbidsCtrl', function($scope, $firebaseObject, editBidAmount, submitBidRef, $routeParams, envService){
    var User = envService.getUser();
    $scope.bid = $firebaseObject(submitBidRef);
    User.$loaded(function(data){
        
    }); 
    $scope.User = User;

   $scope.project = $firebaseObject(editBidAmount);
    console.log($scope.project);
    
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
//        if($scope.project.bidAmount) {
//            $scope.bidAmount = $scope.project.bidAmount;
//        } else {
//            $scope.bidAmount = "No bids"
//        }
        
    });
    
    $scope.submitBid = function(){
//        $scope.bid = $firebaseObject(submitBidRef);
        console.log($scope.bid)
        $scope.bid.bidAmount = $scope.User.bidAmount
        console.log($scope.bid)
        $scope.bid.$save()
        console.log('you made it to the submitBid function');
    }
})