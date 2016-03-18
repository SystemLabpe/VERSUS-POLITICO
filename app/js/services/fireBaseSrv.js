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
       return new Firebase(pathRef([FBURL].concat(Array.prototype.slice.call(arguments))));
    }
  }]);

  fireBaseSrv.service('syncData', ['$firebaseArray', 'firebaseRef', function($firebaseArray, firebaseRef) {
    /**
     * @function
     * @name syncData
     * @param {String|Array...} path
     * @param {int} [limit]
     * @return a Firebase instance
     */
    return function(path) {
       var ref = firebaseRef(path);
       // limit && (ref = ref.limit(limit));
       return $firebaseArray(ref);
    };
  }]);


  return fireBaseSrv;

});
