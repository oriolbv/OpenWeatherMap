angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Ciutats) {
    Ciutats.all().then(function(result) {
        $scope.ciutats = result.data.list;
    }, function(err) {
        console.error('Error all', err);
    });
})

.controller('CiutatsCtrl', function($scope, $stateParams, Ciutats) {
    Ciutats.get($stateParams.idCiutat).then(function(result) {
        $scope.ciutat = result.data;
        console.log($scope.ciutat);
    }, function (err) {
        console.error('Error get', err);
    })
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Ciutats) {
    $scope.chat = Ciutats.get($stateParams.idCiutat);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
