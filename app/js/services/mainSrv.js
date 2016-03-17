define(["angularResource"],function(){
  'use strict';

  var mainSrv = angular.module('mainSrv',['ngResource']);

  mainSrv.factory('appSrv',['$resource', function ($resource){
    return $resource('/app/:entity/:method/:id/:param1/:param2',null,
    {
      'put': { method:'PUT' ,params: {entity : '@entity', method:'@method'} }
    });
  }]);

  return mainSrv;
});
