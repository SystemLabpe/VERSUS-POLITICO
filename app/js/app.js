define(["controllers/mainCtr","controllers/homeCtr","controllers/firebaseCtr",
  "controllers/versusCtr","controllers/tournamentCtr","angularRoute"],function(){
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
        templateUrl : "templates/tournament.html",
        controller  : "tournamentCtr"
      })
      .when("/versus",{
        templateUrl : "templates/vs.html",
        controller  : "versusCtr"
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
