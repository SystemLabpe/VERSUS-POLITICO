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

    // versusSrv.getVersusByState("inProcess").then(function(data) {
    //   var inProcessVersusList = data;
    //   var finishedVersusList;
    //   versusSrv.getVersusByState("finished").then(function(data) {
    //     finishedVersusList = data;
    //   });
    //   $scope.versusList = inProcessVersusList.concat(finishedVersusList);
    // });
    var inProcessVersusList = {};
    $scope.versusList = [];

    versusSrv.getVersusByState("inProcess").then(function(data) {
       inProcessVersusList = data;
       console.log('inProcessVersusList -> ', inProcessVersusList);
       getaa();
    });

    function getaa() {
      var finishedVersusList;
      versusSrv.getVersusByState("finished").then(function(data) {
        finishedVersusList = data;
        console.log('finishedVersusList -> ', finishedVersusList);
        $scope.versusList = inProcessVersusList.concat(finishedVersusList);
      });
      console.log('----->' , $scope.versusList);
    }

  }]);

});
