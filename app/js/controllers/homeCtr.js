define(['controllers/mainCtr','services/versusSrv'], function(mainCtr){
  'use strict';

  mainCtr.controller('homeCtr',['$scope','$timeout','versusSrv','topicSrv',
    function ($scope,$timeout,versusSrv,topicSrv){

    // $scope.votingVersusList = versusSrv.getVotingVersus();
    versusSrv.getVotingVersus().then(function(data) {
      $scope.votingVersusList = data;
    });

    topicSrv.getVotingTopics().then(function(data) {
      $scope.votingTopicsList = data;
    });

  }]);

});
