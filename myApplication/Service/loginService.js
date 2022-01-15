var app = angular.module('myApp');
  
  app.factory('LoginService', function() {
    var admin = 'reddy';
    var pass = '9845';
    var isAuthenticated = false;
    
    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };
    
  });