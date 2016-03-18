define(["services/mainSrv"],function(mainSrv){
  'use strict';
  var versusSrv = mainSrv.service('versusSrv',['syncData','$q','$firebaseArray',function(syncData,$q,$firebaseArray){
    var mainRef = 'versus';
    return {
      getList:function(args){
        syncData.getList([mainRef,args]).$loaded()
        .then(function(data) {
          console.log("-->",data);
          return data;
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
      },
      getObject:function(args){
        syncData.getObject([mainRef,args]).$loaded()
        .then(function(data) {
          console.log("-->",data);
          return data;
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
      },
      getVotingVersus:function(){
        var defered = $q.defer();
        var promise = defered.promise;
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



  return versusSrv;
});
