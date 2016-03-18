define(['controllers/mainCtr'], function(mainCtr){
  'use strict';

  mainCtr.controller('firebaseCtr',['$scope','syncData',function ($scope,syncData){


    console.log("--->",syncData('Political_party'));





  }]);

});
