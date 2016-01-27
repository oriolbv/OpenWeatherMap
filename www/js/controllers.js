angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Ciutats) {
    Ciutats.all().then(function(result) {
        $scope.ciutats = result.data.list;  
    });       


//var a = Ciutats.all();
//console.log(a[0]);
/*     $http.get('http://api.openweathermap.org/data/2.5/find?lat=41.68&lon=1.94&cnt=10&APPID=3da25caa87ab728585fd73a5d2ad6cb7').then(function(resp) {
     console.log('Success', resp);
     $scope.ciutats = resp.data.list;
   }, function(err) {
     console.error('ERR', err);
     // err.status will contain the status code
   })*/
    
/*$scope.ciutats = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];*/

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
