angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.addLink = function(){
    Links.addLink($scope.link)
    .then(function(code){
      $scope.loading = false;
      $scope.link.code = code;
    });
  };
});
