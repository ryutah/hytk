'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */

var app = angular.module('yoAngularApp', ['ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'hc.marked',
  'ui.bootstrap'
]);

app.service('myService', MyService);

app.service('blogService', ['$http', BlogService]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about/:test', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/foo', {
      templateUrl: 'views/foo.html',
      controller: 'FooCtrl',
      controllerAs: 'foo'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.config(['markedProvider', '$httpProvider',
  function(markedProvider, $httpProvider) {
    markedProvider.setOptions({
      gfm: true,
      tables: true,
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });

    $httpProvider.defaults.headers.post = {
      'Content-Type': 'application/json'
    };
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
  }
]);
//
// app.config(['$locationProvider', function($locationProvider){
//   $locationProvider.html5Mode(true);
// }]);
