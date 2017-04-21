
angular.module('starter.controllers', [])

.controller('AppCtrl',
  function($scope, $ionicPopup, AuthService, AUTH_EVENTS) {
    $scope.username = AuthService.username();

    $scope.$on(AUTH_EVENTS.notAuthorized, function() {
      $ionicPopup.alert({
        title: 'Não autorizado!',
        template: 'Você nao está autorizado a acessar este recurso.'
      });
    });

    $scope.$on(AUTH_EVENTS.notAuthenticated, function() {
      AuthService.logout();
      $state.go('login');
      $ionicPopup.alert({
        title: 'Sessão perdida!',
        template: 'Desculpe, voce terá que logar noavemente.'
      });
    });
  })

.controller('LoginCtrl',
    function($scope, $state, $location, AuthService, $ionicPopup, $ionicLoading){
      $scope.data = {
        username : '',
        password : ''
      };

      $scope.isFilled = function(valid){
        return valid === true ? 'valid' : '';
      };

      $scope.login = function(data) {
        $ionicLoading.show({template: 'Carregando'});

        AuthService.login(data).then(function() {
          $ionicLoading.hide();
          $state.go('app', {}, {reload: true});
        }, function() {
          $ionicLoading.hide();
          $ionicPopup.alert({
            title: 'Login Falhou!',
            template: 'Por favor, verifique os dados informados!'
          });
        });
      };
    })

    .controller('CadastroCtrl',
      function($scope, $state, $location, AuthService, $ionicPopup, $ionicLoading){
        $scope.data = {
          username : '',
          password : ''
        };

        $scope.isFilled = function(valid){
          return valid === true ? 'valid' : '';
        };

        $scope.login = function(data) {
          $ionicLoading.show({template: 'Carregando'});

          AuthService.login(data).then(function() {
            $ionicLoading.hide();
            $state.go('app', {}, {reload: true});
          }, function() {
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: 'Login Falhou!',
              template: 'Por favor, verifique os dados informados!'
            });
          });
        };
      })

.controller('LoginCtrl',
  function($scope, $state, $location, AuthService, $ionicPopup, $ionicLoading){
    $scope.data = {
      email : '',
      password : ''
    };

    $scope.isFilled = function(valid){
      return valid === true ? 'valid' : '';
    };

    $scope.login = function(data) {
      $ionicLoading.show({template: 'Carregando'});

      AuthService.login(data)
      .then(function() {
        $ionicLoading.hide();
        $state.go('tab.disciplinas', {}, {reload: true});
      }, function() {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Login Falhou!',
          template: 'Por favor, verifique os dados informados!'
        });
      });
    };
  })

.controller('CadastroCtrl',
  function($scope, $state, $location, AuthService, $ionicPopup, $ionicLoading){
    $scope.data = {
      email : '',
      password : ''
    };

    $scope.isFilled = function(valid){
      return valid === true ? 'valid' : '';
    };

    $scope.create = function(data) {
      $ionicLoading.show({template: 'Carregando'});

      AuthService.create(data)
      .then(function() {
        $ionicLoading.hide();
        $state.go('login', {}, {reload: true});
      }, function() {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Falha!',
          template: 'Desculpe, houve um problema ao cadastrar o usuário!'
        });
      });
    };
  })

.controller('CadastroCtrl',
  function($scope, $state, $location, AuthService, $ionicPopup, $ionicLoading){
    $scope.data = {
      email : '',
      password : ''
    };

    $scope.isFilled = function(valid){
      return valid === true ? 'valid' : '';
    };

    $scope.create = function(data) {
      $ionicLoading.show({template: 'Carregando'});

      AuthService.create(data)
      .then(function() {
        $ionicLoading.hide();
        $state.go('login', {}, {reload: true});
      }, function() {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Falha!',
          template: 'Desculpe, houve um problema ao cadastrar o usuário!'
        });
      });
    };
  })



.controller('DisciplinasCtrl', function($scope, Disciplinas) {
  var all = Disciplinas.all();
  $scope.faltas = all;

  $scope.periodos = all
    .map(d => d.periodo)
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort();

  $scope.filter = $scope.periodos[$scope.periodos.length - 1];
})

.controller('AccountCtrl', function($scope, $state, AuthService) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.logout = function(){
    AuthService.destroyUserCredentials();
    $state.go('login', {}, {reload: true});
  }
});
