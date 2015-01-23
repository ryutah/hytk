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

// urlのパラメータ読み込み、ng-repeat、リダイレクトのテスト
function controller($scope, $location, $routeParams) {
  $scope.items = [];

  var tags = [];
  tags.push(new Tag('work', 'workid'));
  tags.push(new Tag('blog', 'blogid'));
  tags.push(new Tag('java', 'javaid'));

  $scope.tags = tags;
  $scope.hre = 'inCont';

  // urlパラメータ取得
  var loc = $routeParams.test;
  console.log(loc);

  // console.log($location);

  // フォームの送信ボタン押下時
  $scope.submit = function(about) {
    // フォームの値をコピーする
    var a = angular.copy(about);
    // フォームのformパラメータ取得
    var newForm = a.form;
    // 配列に追加
    array.push(newForm);
    // モデルに値を追加
    $scope.items = array;

    console.log($scope.items);
  };

  // タグボタン押下時
  $scope.lin = function(id){
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
  .controller('AboutCtrl', controller);
