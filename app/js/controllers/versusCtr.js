define(['controllers/mainCtr'], function(mainCtr){
  'use strict';

  mainCtr.controller('versusCtr',['$scope','$location',
    function ($scope,$location){

      $scope.versus = JSON.parse(sessionStorage.getItem('versus'));
      console.log('versus -> ', $scope.versus);

  }]);

});
