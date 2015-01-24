'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */

function MainCtrl() {
  this.work = true;
  this.blog = false;

  this.tes = 'test';

  console.log('IN THE MAIN');

  this.change = function() {
    this.work = !this.work;
    this.blog = !this.blog;
  };
}

angular.module('yoAngularApp').controller('MainCtrl', MainCtrl);
