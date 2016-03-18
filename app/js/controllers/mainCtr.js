define(["services/mainSrv","services/fireBaseSrv"],function(){
  'use strict';
  var mainCtr = angular.module('mainCtr',['mainSrv','fireBaseSrv']);
  return mainCtr;
});
