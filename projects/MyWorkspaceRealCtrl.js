/**
 * Created by Steve on 4/23/2016.
 */
var app = angular.module('drawWorksApp');
app.controller('MyWorkspaceRealCtrl', function ($scope, $firebaseObject, editBidAmount, submitBidRef, $location, $routeParams, envService) {
    var User = envService.getUser();
    $scope.bid = $firebaseObject(submitBidRef);
    User.$loaded(function(data){

    });

    $scope.bidlist = [
        {
            ProjectTitle: "Sub-contractor",
            CompanyName:"ACME Construction",
            Address:"111045 Rancho Expressway",
            City:"Rancho Cucamunga",
            State:"California",
            PostalCode:"12345",
            Fax:"333-333-3333",
            Phone:"444-444-4444",
            ProjectReferenceNumber:"10000-00002",
            ProjectOwner:"Kevin Thomas",
            ProjectDescription:"Adding on to existing home",
            BidDate:"04/30/2016",
            Contact:"Jed Black"
        },
        {
        ProjectTitle:"Contractor",
        CompanyName:"ABC Construction",
        Address:"123 California Ave.",
        City:"Pleasant Grove",
        State:"Utah",
        PostalCode:"01111",
        Fax:"111-111-1111",
        Phone:"222-222-2222",
        ProjectReferenceNumber:"10000-00001",
        ProjectOwner:"Steve Woodis",
        ProjectDescription:"Building Home on 136 S. 320 E",
        BidDate:"4/22/2016",
        Contact:"ABC Construction"
        },
        {
        ProjectTitle:"Project Owner",
        CompanyName:"Owner",
        Address:"110 South 40 West",
        City:"Lehi",
        State:"Utah",
        PostalCode:"80808",
        Fax:"555-555-5555",
        Phone:"666-666-6666",
        ProjectReferenceNumber:"10000-00003",
        ProjectOwner:"Daphne Thomas",
        ProjectDescription:"Home on 110 S 40 W",
        BidDate:"4/27/2016",
        Contact:"Mark Messier"
        }]

});




