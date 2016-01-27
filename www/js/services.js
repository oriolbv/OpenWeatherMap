angular.module('starter.services', [])

.factory('Ciutats', function($http) {
  var ciutats = [];

  return {
    all: function() {
        return $http.get('http://api.openweathermap.org/data/2.5/find?lat=41.68&lon=1.94&cnt=10&APPID=3da25caa87ab728585fd73a5d2ad6cb7')
    },
    // remove: function(chat) {
    //   chats.splice(chats.indexOf(chat), 1);
    // },
    get: function(idCiutat) {
        return $http.get('http://api.openweathermap.org/data/2.5/weather?id='+ idCiutat +'&APPID=3da25caa87ab728585fd73a5d2ad6cb7');
    }
  };
});
