define(["services/mainSrv"],function(mainSrv){
  'use strict';
  var topicSrv = mainSrv.service('topicSrv',['syncData','$firebaseArray',function(syncData,$firebaseArray){
    var mainRef = 'topic';

    return {
      getList:function(args){
        syncData.getList([mainRef,args]).$loaded()
        .then(function(data) {
          console.log("-->",data);
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
      },
      getObject:function(args){
        syncData.getObject([mainRef,args]).$loaded()
        .then(function(data) {
          console.log("-->",data);
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
      },
      getVotingTopics:function(){
        var ref = syncData.getRef(mainRef);
        var query = ref.orderByChild("state").equalTo("voting");
        $firebaseArray(query).$loaded()
        .then(function(data) {
          console.log("-->",data);
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
      }
    };
  }]);


  return topicSrv;
});
