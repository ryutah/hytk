"use strict";var app=angular.module("yoAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","hc.marked"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/foo",{templateUrl:"views/foo.html",controller:"FooCtrl"}).otherwise({redirectTo:"/"})}]),app.config(["markedProvider",function(a){a.setOptions({gfm:!0,tables:!0,highlight:function(a){return hljs.highlightAuto(a).value}})}]),angular.module("yoAngularApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("yoAngularApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("yoAngularApp").controller("FooCtrl",["$scope",function(a){a.myfoo="##MyTEST",a.test=function(){console.log(a.foo),console.log(a.awesomeThings),a.myfoo=a.foo;var b=JSON.stringify(a);console.log(b)}}]);