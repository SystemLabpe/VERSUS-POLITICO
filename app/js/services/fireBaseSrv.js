define(["angularFire","config"],function(){
  'use strict';

  var fireBaseSrv = angular.module('fireBaseSrv',['firebase','config']);

  function pathRef(args) {
   for(var i=0; i < args.length; i++) {
      if( typeof(args[i]) === 'object' ) {
         args[i] = pathRef(args[i]);
      }
   }
   return args.join('/');
  }


  fireBaseSrv.factory('firebaseRef', ['Firebase', 'FBURL', function(Firebase, FBURL) {
    /**
     * @function
     * @name firebaseRef
     * @param {String|Array...} path
     * @return a Firebase instance
     */
    return function(path) {
      // console.log("arguments",pathRef([FBURL].concat(Array.prototype.slice.call(arguments))));
      return new Firebase(pathRef([FBURL].concat(Array.prototype.slice.call(arguments))));
    }
  }]);

  fireBaseSrv.service('syncData', ['$firebaseArray', '$firebaseObject', 'firebaseRef', function($firebaseArray, $firebaseObject, firebaseRef) {
    return {
      getList:function(path){
        var ref = firebaseRef(path);
        return $firebaseArray(ref);
      },
      getObject:function(path){
        var ref = firebaseRef(path);
        return $firebaseObject(ref);
      },
      getRef:function(path){
        return firebaseRef(path);
      }
    };
    // return function(path) {
    //    var ref = firebaseRef(path);
    //    var query = ref.orderByChild("state").equalTo("voting");
    //    // limit && (ref = ref.limit(limit));
    //    return $firebaseArray(query);
    // };
  }]);


  return fireBaseSrv;

});
