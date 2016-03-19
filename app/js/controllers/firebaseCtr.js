define(["controllers/mainCtr","services/versusSrv","services/topicSrv","services/tournamentSrv"], function(mainCtr){
  'use strict';

  mainCtr.controller('firebaseCtr',['$scope','versusSrv','topicSrv','tournamentSrv',
    function ($scope,versusSrv,topicSrv,tournamentSrv){

    // topicSrv
    // topicSrv.getVotingTopics();

    // versusSrv
    // versusSrv.getVotingVersus();

    //tournamentSrv
    //tournamentSrv.getList();
    console.log("-->",tournamentSrv.getList());
  }]);

});
