'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:FooCtrl
 * @description
 * # FooCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('FooCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
