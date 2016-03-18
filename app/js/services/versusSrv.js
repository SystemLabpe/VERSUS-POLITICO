define(["services/mainSrv"],function(mainSrv){
  'use strict';
  var versusSrv = mainSrv.service('versusSrv',['syncData','$q','$firebaseArray',function(syncData,$q,$firebaseArray){
    var mainRef = 'versus';
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
        return promise;
      },
      getVersusByState:function(state){
        var ref = syncData.getRef(mainRef);
        var query = ref.orderByChild("state").equalTo(state);
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
