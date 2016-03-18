define(["controllers/mainCtr","controllers/homeCtr",
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
      .when("/torneo",{
        templateUrl : "templates/tournament.html"
      })
      .otherwise({ redirectTo : "/home"});
    }]);
  angular.bootstrap(document, ['app']);
  return app;
});
