'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoAngularApp
 */
function controller($scope) {
  $scope.submit = function(about) {
    var a = angular.copy(about)
    console.log(a.form);
  };
}

angular.module('yoAngularApp')
  .controller('AboutCtrl', controller);
