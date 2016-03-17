define(['controllers/mainCtr','services/mainSrv'], function(mainCtr){
  'use strict';

  mainCtr.controller('homeCtr',['$scope',function ($scope){

    $scope.container = {'background' : '#fff'};

  }]);

});
