'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */

var app = angular.module('yoAngularApp',
                        ['ngAnimate',
                         'ngCookies',
                         'ngResource',
                         'ngRoute',
                         'ngSanitize',
                         'ngTouch',
                         'hc.marked',
                         'ui.bootstrap'
                  ]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about/:test', {
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
//
// app.config(['$locationProvider', function($locationProvider){
//   $locationProvider.html5Mode(true);
// }]);
