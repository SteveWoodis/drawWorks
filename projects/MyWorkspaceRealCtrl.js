/**
 * Created by Steve on 4/23/2016.
 */
var app = angular.module('drawWorksApp');
app.controller('MyWorkspaceRealCtrl', function ($scope) {
    $scope.ProjectTitle="Sub-contractor";
    $scope.CompanyName="ACME Construction";
    $scope.Address="111045 Rancho Expressway";
    $scope.City="Rancho Cucamunga";
    $scope.State="California";
    $scope.PostalCode="12345";
    $scope.Fax="333-333-3333";
    $scope.Phone="444-444-4444";
    $scope.ProjectReferenceNumber="10000-00002";
    $scope.ProjectOwner="Kevin Thomas";
    $scope.ProjectDescription="Adding on to existing home";
    $scope.BidDate="04/30/2016";
    $scope.Contact="Jed Black";
})

