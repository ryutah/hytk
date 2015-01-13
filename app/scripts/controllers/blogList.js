'use strict';

var Tag = function(tag, id) {
  this.id = id;
  this.tag = tag;
};

function genTag(tags) {
  var tagTemlete = '<div class="row><a href="#">%%</a></div>"';
  var newElem = '';

  for(var t in tags) {
    var tag = tagTemlete.replace('%%', tags[t].tag);
    newElem += tag;
  }

  return newElem;
}

function controller($scope) {
  var tags = [];

  for(var i; i < 15; i++){
    tags.push(new Tag('tag' + i, i + 1));
  }

  $scope.tagdiv = genTag(tags);
}

angular.module('yoAngularApp').controller('BlogListCtrl', controller);
