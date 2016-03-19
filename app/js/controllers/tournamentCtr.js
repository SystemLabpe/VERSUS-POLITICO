define(['controllers/mainCtr'], function(mainCtr){
  'use strict';

  mainCtr.controller('tournamentCtr',['$scope','$location',
    function ($scope,$location){

      $scope.tournament = JSON.parse(sessionStorage.getItem('tournament'));
      console.log('asd',$scope.tournament);
  }]);

});
