define(['controllers/mainCtr','services/versusSrv'], function(mainCtr){
  'use strict';

  mainCtr.controller('homeCtr',['$scope','$timeout','versusSrv',function ($scope,$timeout,versusSrv){

    // $scope.votingVersusList = versusSrv.getVotingVersus();
    versusSrv.getVotingVersus().then(function(data) {
      $scope.votingVersusList = data;
      console.log('scope -> ',$scope.votingVersusList);
    });

    // $timeout(function() {
    //   console.log('scope -> ',$scope.votingVersusList);
    // },8000);


  }]);

});
