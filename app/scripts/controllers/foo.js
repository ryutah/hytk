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
    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    $scope.myfoo = '##MyTEST';

    $scope.test = function() {
      console.log($scope.foo);
      console.log($scope.awesomeThings);

      $scope.myfoo = $scope.foo;

      var TestObj = function(index) {
        this.title = 'testTitle' + index;
      };

      var list = [];
      for(var i = 0; i < 30; i++) {
        list.push(new TestObj(i + 1));
      }

      var newelem = '';
      for(var l in list) {
        console.log(list[l].title);

        var elem = '<div class="row">\n';
        elem += '<div class="col-md-12">\n';
        elem += '<h1>' + list[l].title + '</h1>\n';
        elem += '</div>\n';
        elem += '</div>\n';

        console.log(elem);
        newelem += elem;
      }

      $scope.bindtest = newelem;

      // var str = null;
      // for(var i = 0; i < 10; i++) {
      //   if(str === null) {
      //     str = '<h1>' + 1 + '</h1>';
      //   }
      //   else {
      //     str += '<h1>' + (i+1) + '</h1>';
      //   }
      // }
      //
      // $scope.bindtest = str;
      //
      // var json = JSON.stringify($scope);
      // console.log(json);
    };
  });
