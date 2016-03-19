define(['controllers/mainCtr','services/versusSrv'], function(mainCtr){
  'use strict';

  mainCtr.controller('homeCtr',['$scope','$location','versusSrv','topicSrv','tournamentSrv',
    function ($scope,$location,versusSrv,topicSrv,tournamentSrv){

    versusSrv.getVersusByState("voting").then(function(data) {
      $scope.votingVersusList = data;
    });

    topicSrv.getVotingTopics().then(function(data) {
      $scope.votingTopicsList = data;
    });

    tournamentSrv.getList().then(function(data) {
      $scope.tournamentsList = data;
      console.log('tournamentsList -> ', $scope.tournamentsList);
    });

    var inProcessVersusList = [];
    $scope.versusList = [];

    function getfinishedVersusList() {
      var finishedVersusList;
      versusSrv.getVersusByState("finished").then(function(data) {
        finishedVersusList = data;
        $scope.versusList = inProcessVersusList.concat(finishedVersusList);
      });
    }

    versusSrv.getVersusByState("inProcess").then(function(data) {
       inProcessVersusList = data;
       getfinishedVersusList();
    });

    $scope.goVersusDetail = function(versus) {
      sessionStorage.setItem('versus', JSON.stringify(versus));
      $location.path('/versus');
    };

    $scope.goTournamentDetail = function(tournament) {
      console.log('tournament',tournament);
      sessionStorage.setItem('tournament', JSON.stringify(tournament));
      $location.path('/torneo');
    };

  }]);

});
