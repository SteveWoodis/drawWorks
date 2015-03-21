angular.module('drawWorksApp').service('envService', function envService($location, $timeout, $q, $firebaseObject, $http) {
   var ref = new Firebase("https://drawworks.firebaseio.com");
    var gUserName = '';
    var uid;
    
    this.createUser = function(UserData){
        gUserName = UserData.reg_email;
        console.log(UserData.reg_email);
        
        
        ref.createUser({
            email    : UserData.reg_email,
            password : UserData.reg_password,
            username: UserData.reg_username
        }, function(error, usrData) {
        if (error) {
            console.log("Error creating user:", error);
            $timeout(function(){
                $location.path('/login');
            });
        
        } else {
            ref.child('user').child(usrData.uid).set(UserData);
        console.log("Successfully created user account with uid:", usrData.uid);
            console.log('User Data from createUser ' + UserData.reg_email);
            uid = usrData.uid;
            $timeout(function(){
                $location.path('/aboutMe'); 
            })
        }
    });
    }
    
   

    this.authUserName = function(userData){ 
        var deferred = $q.defer();
	 	ref.authWithPassword({
            email    : userData.reg_email,
            password : userData.reg_password,
            username: userData.reg_username
	 	}, function(error, authData) {
   			if (error) {
    		 		alert("Login Failed!", error);
                    $timeout(function(){
                        $location.path('/login');
                    })
   			} else {
                deferred.resolve(userData);
     		 console.log("Authenticated successfully with payload:", authData);
                gUserName = userData.reg_username;
                uid = userData.uid;
                $timeout(function(){
                    $location.url("/gprojects");
                })
                
   			}
        });
        return deferred.promise;
        
    }
    
    this.getUser = function(){
        uid = ref.getAuth() ? ref.getAuth().uid : null;
        if(!uid) {
            return $location.path("/login");
        }
        console.log(uid);
        return $firebaseObject(new Firebase("https://drawworks.firebaseio.com" + "/user/" + uid));
	}
    
     this.globalUserName = function(){
        return gUserName;
    }
});