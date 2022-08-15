(function(){
  'use strict';
angular.module("myFirstApp", [])
.controller('MyFirstController',function($scope){
  $scope.name="Anning";
  $scope.sayHello=function(){
    return "Hello coursera";
  }
})
})();
