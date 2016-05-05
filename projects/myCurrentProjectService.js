var app = angular.module('drawWorksApp');
app.factory('myCurrentProjectService', function(envService, $firebaseObject){
	var firebaseUrl = "https://drawworks.firebaseio.com";

	return {

			createProjects: function(){
				return new Firebase('https://drawworks.firebaseio.com/projects/');
			},
			getProject: function(projectId){
                console.log('projectId: ',projectId);
				return new Firebase('https://drawworks.firebaseio.com/projects/' + projectId);
			},
            getProjects: function(){
              return new Firebase('https://drawworks.firebaseio.com/projects');
            },
			updateProject: function(projectId){
				return new Firebase(firebaseUrl + '/projects/' + projectId);
                //return new Firebase(firebaseUrl + '/projects/' + projectId + '/comments');
			}
	}
})

//I changed threadId to projectId
