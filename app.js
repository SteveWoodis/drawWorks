var app = angular.module('drawWorksApp', ['firebase', 'ngRoute', 'ngDragDrop']);
app.config(function($routeProvider){
    $routeProvider
    .when('/landing', {
        templateUrl: '/landing.html',
        controller: 'landingCtrl'
    })
    .when('/registration', {
        templateUrl: '/login/contractorRegistration.html',
        controller: 'conRegController'
    })
    .when('/aboutMe', {
        templateUrl: '/Aboutme.html',
        controller: 'aboutMeCtrl'
    })
    .when('/MyWorkspace', {
        templateUrl: '/projects/MyWorkspacereal.html',
        controller: 'MyWorkspace'
    })
    .when('/login', {
        templateUrl: '/login/login.html',
        controller: 'loginController'
    })
    .when('/interrupt', {
        templateUrl: '/interrupt.html',
        controller: 'intCtrl'
    }
        )
    .when('/HowItWorks', {
        templateUrl: '/HowItWorks.html',
        controller: 'HowItWorksCtrl'
    })
    .when('/gprojects', {
     templateUrl: '/projects/gprojects.html',
        controller: 'gprojectsCtrl',
        resolve: {
           getProjectsRef: function (gprojectService) {
            return gprojectService.getProjects();
            }
        }
    })
    .when('/createProjects', {
     templateUrl: '/projects/createbids.html',
        controller: 'createbidsCtrl',
        resolve: {
            createProjectsRef: function (gprojectService) {
            return gprojectService.createProjects();
            }
        }
    })

    .when('/project/:projectId', {
    templateUrl: 'projects/submitbids.html',
    controller: 'submitbidsCtrl',
     resolve: {
            //threadRef: function (gprojectService, $route) {
            //return gprojectService.getThread($route.current.params.projectId);
            //},
            editBidAmount: function (gprojectService, $route) {
            return gprojectService.getProject($route.current.params.projectId);
            },
            submitBidRef: function (gprojectService, $route) {
            return gprojectService.updateProject($route.current.params.projectId);
            }
        }
    })
    .otherwise({
        redirectTo: '/landing'
    })
    });

app.controller('oneCtrl', function($scope, $timeout) {
  $scope.list1 = [];
  $scope.list2 = [];
  $scope.list3 = [];
  $scope.list4 = [];
  
  $scope.list5 = [
    { 'title': 'Item 1', 'drag': true },
    { 'title': 'Item 2', 'drag': true },
    { 'title': 'Item 3', 'drag': true },
    { 'title': 'Item 4', 'drag': true },
    { 'title': 'Item 5', 'drag': true },
    { 'title': 'Item 6', 'drag': true },
    { 'title': 'Item 7', 'drag': true },
    { 'title': 'Item 8', 'drag': true }
  ];

  // Limit items to be dropped in list1
  $scope.optionsList1 = {
    accept: function(dragEl) {
      if ($scope.list1.length >= 2) {
        return false;
      } else {
        return true;
         }
    }
  };
});
