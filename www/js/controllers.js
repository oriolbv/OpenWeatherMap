angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Ciutats) {
    Ciutats.all().then(function(result) {
        $scope.ciutats = result.data.list;
    }, function(err) {
        console.error('Error all', err);
    });
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Ciutats) {
  $scope.chat = Ciutats.get($stateParams.idCiutat);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
