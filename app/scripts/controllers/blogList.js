'use strict'

angular.module('yoAngularApp')
  .controller('BlogListCtrl', function($scope) {
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
  });
