"use strict";function controller(a,b,c){a.items=[];var d=[];d.push(new Tag("work","workid")),d.push(new Tag("blog","blogid")),d.push(new Tag("java","javaid")),a.tags=d,a.hre="inCont";var e=c.test;console.log(e),a.submit=function(b){var c=angular.copy(b),d=c.form;array.push(d),a.items=array,console.log(a.items)},a.lin=function(a){console.log(a+" function lin"),console.log(b),b.path("/about/"+a),console.log(c)}}var app=angular.module("yoAngularApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","hc.marked"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about/:test",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/foo",{templateUrl:"views/foo.html",controller:"FooCtrl"}).otherwise({redirectTo:"/"})}]),app.config(["markedProvider",function(a){a.setOptions({gfm:!0,tables:!0,highlight:function(a){return hljs.highlightAuto(a).value}})}]),angular.module("yoAngularApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);var array=[],Tag=function(a,b){this.id=b,this.name=a};controller.$inject=["$scope","$location","$routeParams"],angular.module("yoAngularApp").controller("AboutCtrl",controller),angular.module("yoAngularApp").controller("FooCtrl",["$scope",function(a){a.myfoo="##MyTEST",a.test=function(){console.log(a.foo),console.log(a.awesomeThings),a.myfoo=a.foo;for(var b=function(a){this.title="testTitle"+a},c=[],d=0;30>d;d++)c.push(new b(d+1));var e="";for(var f in c){console.log(c[f].title);var g='<div class="row">\n';g+='<div class="col-md-12">\n',g+="<h1>"+c[f].title+"</h1>\n",g+="</div>\n",g+="</div>\n",console.log(g),e+=g}a.bindtest=e}}]);