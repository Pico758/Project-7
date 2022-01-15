var app = angular.module('myApp');

  app.controller('HomeController', 
  function($scope, $rootScope, $stateParams, $state, LoginService) {
    $scope.user = $rootScope.userName;
    
  });

  app.controller('userDetails',function ($scope){
    $scope.userNames = [
      {
          "name": "pampapathi",
          "city": "bellary",
          "phonenumber": "123456",
          "age": "25"
      },
      {
          "name": "mounesha",
          "city": "bellary",
          "phonenumber": "123456",
          "age": "25"
      },
      {
          "name": "akshaya kumar",
          "city": "bellary",
          "phonenumber": "123456",
          "age": "25"
      },
      {
          "name": "mahendra",
          "city": "bellary",
          "phonenumber": "123456",
          "age": "25"
      },
    ]

  });
  
