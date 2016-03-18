define(["services/mainSrv"],function(mainSrv){
  'use strict';
  var topicSrv = mainSrv.service('topicSrv',['syncData','$firebaseArray',function(syncData,$firebaseArray){
    var mainRef = 'topic';
    var defered = $q.defer();
    var promise = defered.promise;
    return {
      getList:function(args){
        syncData.getList([mainRef,args]).$loaded()
        .then(function(data) {
          defered.resolve(data);
        })
        .catch(function(error) {
          console.error("Error:", error);
          defered.reject(error);
        });
      },
      getObject:function(args){
        syncData.getObject([mainRef,args]).$loaded()
        .then(function(data) {
          defered.resolve(data);
        })
        .catch(function(error) {
          console.error("Error:", error);
          defered.reject(error);
        });
      },
      getVotingTopics:function(){
        var ref = syncData.getRef(mainRef);
        var query = ref.orderByChild("state").equalTo("voting");
        $firebaseArray(query).$loaded()
        .then(function(data) {
          defered.resolve(data);
        })
        .catch(function(error) {
          console.error("Error:", error);
          defered.reject(error);
        });
      }
    };
  }]);


  return topicSrv;
});
