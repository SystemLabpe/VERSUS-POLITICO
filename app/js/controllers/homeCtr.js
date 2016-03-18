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

    versusSrv.getVotingVersus("inProcess").then(function(data) {
      var inProcessVersusList = data;
      var finishedVersusList;
      versusSrv.getVotingVersus("finished").then(function(data) {
        finishedVersusList = data;
      });
      $scope.versus = inProcessVersusList.concat(finishedVersusList);
    });


  }]);

});
