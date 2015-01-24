'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoAngularApp
 */
var array = [];

// テストで表示させるタグ
var Tag = function(name, id) {
  this.id = id;
  this.name = name;
};

function AboutCtrl($location, $routeParams) {
  this.items = [];

  this.tags = [];
  this.tags.push(new Tag('work', 'workid'));
  this.tags.push(new Tag('blog', 'blogid'));
  this.tags.push(new Tag('java', 'javaid'));

  this.hre = 'inCont';

  // urlパラメータ取得
  var loc = $routeParams.test;
  console.log(loc);

  // console.log($location);

  // フォームの送信ボタン押下時
  this.submit = function(about) {
    // フォームの値をコピーする
    var a = angular.copy(about);
    // フォームのformパラメータ取得
    var newForm = a.form;
    // 配列に追加
    array.push(newForm);
    // モデルに値を追加
    this.items = array;

    console.log(this.items);
  };

  // タグボタン押下時
  this.lin = function(id){
    console.log(id + ' function lin');
    console.log($location);

    // リダイレクト
    // $location.absUrl() = 'http://www.google.com';
    // $location.search({a: 'b', c: 'chu'});
    $location.path('/about/'+id);
    console.log($routeParams);
  };
}


angular.module('yoAngularApp')
  .controller('AboutCtrl', AboutCtrl);
