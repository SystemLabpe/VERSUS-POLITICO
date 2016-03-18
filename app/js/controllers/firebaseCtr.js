define(["controllers/mainCtr","services/versusSrv","services/topicSrv"], function(mainCtr){
  'use strict';

  mainCtr.controller('firebaseCtr',['$scope','versusSrv','topicSrv',function ($scope,versusSrv,topicSrv){

    // topicSrv
    // topicSrv.getVotingTopics();

    // versusSrv
    // versusSrv.getVotingVersus();
    console.log("-->",versusSrv.getVersus());
  }]);

});
