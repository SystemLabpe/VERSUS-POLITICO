define(['controllers/mainCtr','services/versusSrv'], function(mainCtr){
  'use strict';

  mainCtr.controller('homeCtr',['$scope','$timeout','versusSrv','topicSrv',
    function ($scope,$timeout,versusSrv,topicSrv){

    // $scope.votingVersusList = versusSrv.getVotingVersus();
    versusSrv.getVersusByState("voting").then(function(data) {
      $scope.votingVersusList = data;
    });

    topicSrv.getVotingTopics().then(function(data) {
      $scope.votingTopicsList = data;
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

  }]);

});
