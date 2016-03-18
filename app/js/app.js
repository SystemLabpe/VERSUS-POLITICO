define(["controllers/mainCtr","controllers/homeCtr","controllers/firebaseCtr",
  "angularRoute"],function(){
  'use strict';

  var app = angular.module("app",['ngRoute','mainCtr']);

  app.config(['$routeProvider',
    function($routeProvider){
      $routeProvider
      .when("/home",{
        templateUrl : "templates/home.html",
        controller  : "homeCtr"
      })
      .when("/firebase",{
        templateUrl : "templates/firebase.html",
        controller  : "firebaseCtr"
      })
      .otherwise({ redirectTo : "/home"});
    }]);
  angular.bootstrap(document, ['app']);
  return app;
});
