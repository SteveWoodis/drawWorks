var app = angular.module('drawWorksApp', ['firebase', 'ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/landing', {
        templateUrl: '/landing.html',
        controller: 'landingCtrl'
    })
    .when('/login', {
        templateUrl: '/login/login.html',
        controller: 'loginController'
    })
    .when('/registration', {
        templateUrl: '/login/contractorRegistration.html',
        controller: 'conRegController'
    })
    .when('/aboutMe', {
        templateUrl: '/Aboutme.html',
        controller: 'aboutMeCtrl'
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

