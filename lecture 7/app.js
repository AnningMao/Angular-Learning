(function(){
  'use strict';
angular.module("NameCaculator", [])
.controller('NameCaculatorController',function($scope){
  $scope.name = "";
  $scope.totalValue = 0;
  $scope.displayNumeric=function(){
    var totalNameValue=0;
    $scope.totalValue=totalNameValue;
  };
});
})();
