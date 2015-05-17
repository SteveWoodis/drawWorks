var app = angular.module('drawWorksApp');
app.controller('mainController', function($scope, $firebase, $location, envService){
			var User = envService.getUser();

		$scope.clearUser = function(){
				envService.clearUser();
				$location.path('/landing')
		}
		$scope.testUserG = function(){
				console.log('User from the textUserG function ', User);
				if(User.reg_email == ""){
					$location.path('/interrupt')
				}
				else{
				$location.path('/gprojects')
					}
		}
		$scope.testUserC = function(){
				console.log('User from the textUserC function ', User);
				if(User.reg_email == ""){
					$location.path('/interrupt')
				}
				else{
				$location.path('/createProjects')
					}
		}
		$scope.homePage = function(){
			$location.path('/landing')
		}
		$scope.howItWorks = function(){
			$location.path('/HowItWorks')
		}

		$scope.aboutUs = function (){
			$location.path('/aboutUs')
		}
		$scope.Profile = function(){
				console.log('User from the textUserG function ', User);
				if(User.reg_email == ""){
					$location.path('/interrupt')
				}
				else{
				$location.path('/aboutMe')
					}
		}
		$scope.login = function(){
			$location.path('/login')
		}
	})