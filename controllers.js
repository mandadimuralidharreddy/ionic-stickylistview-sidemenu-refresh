angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.noMoreItemsAvailable = false;

  $scope.loadMore = function() {
    $scope.items.push({ id: $scope.items.length});


    if ( $scope.items.length == 99 ) {
      $scope.noMoreItemsAvailable = true;
    }
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };
  $scope.itemsList=[{id:11},{id:22},{id:33},{id:44},{id:55},{id:66},{id:77}]
  $scope.items = [];
  $scope.doRefresh = function() {
    $scope.$broadcast('scroll.refreshComplete');
  }
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
}).controller('searchCtrl', function($scope, $stateParams) {
  var deviceHeg=$( window ).height();
  $("#list1").height( deviceHeg-60 );
  $("#list1").ioslist();
})