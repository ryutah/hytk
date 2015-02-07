'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:FooCtrl
 * @description
 * # FooCtrl
 * Controller of the yoAngularApp
 */

function FooCtrl(blogService) {

  blogService.hello();

  var data = {
    testdata: 'testdata',
    testArray: ['array1', 'array2']
  };

  this.myfoo = '##MyTEST';

  var collback = function (data) {
    console.log(data);
    console.log(this);
    this.myfoo = data.data;
  };

  blogService.getBlogList(collback.bind(this));

  this.test = function() {
    this.myfoo = this.foo;

    var postData = {
      data: this.foo
    };

    var resp = blogService.postBlogContent(postData);
    console.log('response : ' + resp);
    // this.myfoo = resp;

    var TestObj = function(index) {
      this.title = 'testTitle' + index;
    };

    var list = [];
    for(var i = 0; i < 30; i++) {
      list.push(new TestObj(i + 1));
    }

    var newelem = '';
    for(var l in list) {

      var elem = '<div class="row">\n';
      elem += '<div class="col-md-12">\n';
      elem += '<h1>' + list[l].title + '</h1>\n';
      elem += '</div>\n';
      elem += '</div>\n';

      newelem += elem;
    }

    this.bindtest = newelem;
  };
}

angular.module('yoAngularApp')
  .controller('FooCtrl', FooCtrl);
