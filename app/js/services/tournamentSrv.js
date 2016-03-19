define(["services/mainSrv"],function(mainSrv){
  'use strict';
  var tournamentSrv = mainSrv.service('tournamentSrv',['syncData','$q','$firebaseArray',function(syncData,$q,$firebaseArray){
    return {
      getList:function(args){
        var mainRef = 'tournament';
        var defered = $q.defer();
        var promise = defered.promise;
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
        var mainRef = 'tournament';
        var defered = $q.defer();
        var promise = defered.promise;
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
      getTournamentByState:function(state){
        var mainRef = 'tournament';
        var defered = $q.defer();
        var promise = defered.promise;
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



  return tournamentSrv;
});
