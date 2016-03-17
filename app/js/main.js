require.config({
  paths: {
    angular         : '../lib/angular/angular.min',
    angularRoute    : '../lib/angular-route/angular-route.min',
    angularResource : '../lib/angular-resource/angular-resource.min',
    bootstrap       : '../lib/bootstrap/dist/js/bootstrap.min',
    jquery          : '../lib/jquery/dist/jquery.min'
  },
  shim:  {
    angular :{
      exports :"angular"
    },
    angularRoute :{
      deps  :["angular"]
    },
    angularResource :{
      deps  :["angular"]
    },
    jquery :{
      exports :"jquery"
    },
    bootstrap :{
      deps  :["jquery"]
    },
    app : {
      deps  :["angular"]
    }
  },
  urlArgs: "bust=" + (new Date()).getTime(),
  waitSeconds: 0

});
requirejs(["app"]);
