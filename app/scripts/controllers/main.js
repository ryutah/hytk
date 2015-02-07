'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */

var Content = function(title, img) {
  this.title = title;
  this.img = img;
};

function MainCtrl($http) {
  // console.log($http);

  var url = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139';

  $http({
    url : url,
    method : 'get'
  })
  .success(function(data, status, headers, config) {
    console.log('data:' + JSON.stringify(data));
    console.log('status:' + status);
    console.log('header:', headers);
    console.log('config:' + JSON.stringify(config));
  })
  .error(function(data, status, headers, config) {
    console.log('daata:' + JSON.stringify(data));
    console.log('status:' + status);
    console.log('header:', headers);
    console.log('config:' + JSON.stringify(config));
  });

  this.work = true;
  this.blog = false;

  this.tes = 'test';
  this.contents = [];

  for(var i = 0; i < 100; i++){
    var content = new Content('Title' + i, '');
    this.contents.push(content);
  }

  console.log('IN THE MAIN');

  this.showWork = function() {
    if(!this.work) {
      this.work = !this.work;
      this.blog = !this.blog;
    }
  };

  this.showBlog = function() {
    if(!this.blog) {
      this.work = !this.work;
      this.blog = !this.blog;      
    }
  };
}

angular.module('yoAngularApp').controller('MainCtrl',['$http', MainCtrl]);
