define(['controllers/mainCtr'], function(mainCtr){
  'use strict';

  mainCtr.controller('tournamentCtr',['$scope','$location',
    function ($scope,$location){

      $scope.tournament = JSON.parse(sessionStorage.getItem('tournament'));

      $scope.goVersusDetail = function(versus) {
        sessionStorage.setItem('versus', JSON.stringify(versus));
        $location.path('/versus');
      };

  }]);

});
