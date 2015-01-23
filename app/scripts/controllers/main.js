'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */

var MainController = function() {
  this.controllre = function($scope) {
    // this.ws = [];
    // $scope.ws = ws;

    $scope.work = function() {
      alert('push');
    };
  };
};

function myCont($scope){
  var ws = [1];
  var ts = [];
  $scope.ws = ws;
  $scope.ts = ts;

  $scope.work = function(){
    if(ws.length == 1){
      ws = []
      $scope.ws = ws;

      ts = [1];
      $scope.ts = ts;

    } else {
      ts = [];
      $scope.ts = ts;
      ws.push(1)
      $scope.ws = ws;
    }
  };
}

angular.module('yoAngularApp')
  .controller('MainCtrl', myCont);
