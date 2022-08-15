(function(){
'use strict';

angular.module('MsgApp',[])
.controller('MsgController',MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope){
  $scope.name="Anning";
  $scope.stateOfBeing='hungry'
  $scope.sayMessage=function(){
    return "Anning is funny";
  };

  $scope.feedAnning=function(){
    $scope.stateOfBeing="fed";
  };
}

})();
