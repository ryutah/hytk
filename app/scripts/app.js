'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */
var app = angular.module('yoAngularApp', ['ngAnimate', 'ngCookies', 'ngResource',
  'ngRoute', 'ngSanitize', 'ngTouch',
  'hc.marked'
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/foo', {
      templateUrl: 'views/foo.html',
      controller: 'FooCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.config(['markedProvider', function(markedProvider) {
  markedProvider.setOptions({
    gfm: true,
    tables: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
}]);

// angular
//   .module('yoAngularApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch',
//     'hc.marked'
//   ])
//    .config(
//   function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl'
//       })
//       .when('/foo', {
//         templateUrl: 'views/foo.html',
//         controller: 'FooCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });
