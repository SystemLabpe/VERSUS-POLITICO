define(["services/mainSrv"],function(mainSrv){
  'use strict';
  var topicSrv = mainSrv.service('topicSrv',['syncData','$q','$firebaseArray',function(syncData,$q,$firebaseArray){
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
        return promise;
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
        return promise;
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
        return promise;
      }
    };
  }]);


  return topicSrv;
});
