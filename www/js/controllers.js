
angular.module('starter.controllers', [])
.controller('FaltasCtrl', function($scope, Chats) {
  var all = Chats.all();
  var model = {};

  all.forEach(function(f){
    var key = f.ano + '/' + f.semestre;

    if(!model[key]){
      model[key] = [];
    }

    model[key].push(f);
  });

  $scope.faltas = model;
})

.controller('NotasCtrl', function($scope, Notas) {
  var all = Notas.all();
  var model = {};

  all.forEach(function(f){
    var key = f.ano + '/' + f.semestre;

    if(!model[key]){
      model[key] = [];
    }

    model[key].push(f);
  });

  $scope.faltas = model;
})

.controller('ChatsCtrl', function($scope, Chats) {
  alert(1)
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('DisciplinaDetailCtrl', function($scope, $stateParams, Notas) {
  $scope.chat = Notas.all()[4];
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
