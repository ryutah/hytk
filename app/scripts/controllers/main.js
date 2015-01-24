'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */

var MainController = {
  controller: function($scope) {
    var work = true;
    var blog = false;

    $scope.work = function() {
      work = !work;
      blog = !blog;
      $scope.main.work = work;
      $scope.main.blog = blog;
    };
  }
};

angular.module('yoAngularApp')
  .controller('MainCtrl', MainController.controller);
