define(["services/mainSrv"],function(mainSrv){
  'use strict';
  var versusSrv = mainSrv.service('versusSrv',['syncData','$firebaseArray',function(syncData,$firebaseArray){
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
        var ref = syncData.getRef(mainRef);
        var query = ref.orderByChild("state").equalTo("voting");
        $firebaseArray(query).$loaded()
        .then(function(data) {
          console.log("-->",data);
          return data;
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
      }
    };
  }]);



  return versusSrv;
});
