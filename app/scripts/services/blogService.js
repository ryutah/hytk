'use strict';

var BlogService = function($http) {

  var Service = {
    getBlogList: function(func) {
      var blogList = null;

      $http.get(Define.BlogList)
        .success(function(data, status, headers, config) {
          if(func !== undefined) {
            func(data);
          }
          return data;
        })
        .error(function(data, status, headers, config) {
          console.error('getBlogListError');
          console.error('[status]' + status);
          console.error('[msg]' + data);
        });

      return blogList;
    },

    getBlogContent: function() {
      var blogContent = null;

      $http.get(Define.BlogContent)
        .success(function(data, status, headers, config) {
          blogContent = data;
        })
        .error(function(data, status, headers, config) {
          console.error('getBlogContentError');
          console.error('[status]' + status);
          console.error('[msg]' + data);
        });

      return blogContent;
    },

    postBlogContent: function(data) {

      $http.post(Define.BlogContent, data)
        .success(function(data, status, headers, config) {
          // var json = JSON.parse(data);
          // console.log('responce : ' + data);
          // console.log('responce : ' + json.testdata);
          console.log(data);
          return data;
        })
        .error(function(data, status, headers, config) {
          console.error('postBlogContentError');
          console.error('[status]' + status);
          console.error('[msg]' + data);
        });
    },

    hello: function() {
      console.log('Hello');
    }
  };

  return Service;
};
