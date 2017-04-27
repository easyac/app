
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
        email : window.localStorage.getItem('user_email') || '',
        password : ''
      };

      $scope.isFilled = function(valid){
        return valid === true ? 'valid' : '';
      };

      $scope.login = function(data) {
        $ionicLoading.show({template: 'Carregando'});

        AuthService.login(data).then(function() {
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
  function($scope, $state, AuthService, $ionicPopup, $ionicLoading){
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

.controller('SenacCtrl',
  function($scope, $state, $location, SenacService, $ionicPopup, $ionicLoading){
    var senacCredentials = window.localStorage.getItem('senacCredentials');
    var data = senacCredentials ? JSON.parse(senacCredentials): false;

    if(data){
      $scope.data = Object.assign({ password: '' }, data);
    } else {
      $scope.data = {
        username : '',
        unity: '',
        password : '',
        storePassword: false
      };
    }



    $scope.getUnity = function(data){
      if(data && data.length > 2){
        var unity = data.charAt(0) + data.charAt(1);
        $scope.data.unity = Number.parseInt(unity, 10);
      }
    }

    $scope.create = function(data) {
      $ionicLoading.show({template: 'Carregando'});

      SenacService.create(data)
      .then(function() {
        $ionicLoading.hide();
        $ionicPopup.alert({
          template: 'Sua solicitação foi enviada, você será notificado quando o processo terminar!'
        });
        SenacService.login(data);
      }, function() {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Falha!',
          template: 'Desculpe, houve um problema ao cadastrar o usuário!'
        });
      });
    };
  })

.controller('SyncCtrl',
function($scope, $state, $location, SenacService, AuthService, $ionicPopup, $ionicLoading){
  var senacCredentials = window.localStorage.getItem('senacCredentials');
  $scope.data = senacCredentials ? JSON.parse(senacCredentials): false;

  function positiveAlert(){
    $ionicPopup.alert({
      template: 'Solicitação enviada! Você será notificado quando a sincronia dos dados finalizar'
    });
  }

  if ($scope.data === false){
    var alertPopup = $ionicPopup.alert({
      template: 'Antes de sincronizar os dados, você precisa associar sua conta do Portal do Aluno'
    });

    alertPopup.then(function(res) {
      $state.go('tab.account-senac');
    });
  }
  else if ($scope.data.storePassword) {
    positiveAlert();
  } else {
    var myPopup = $ionicPopup.show({
      template: '<input type="password" ng-model="data.password">',
      title: 'Preencha sua senha',
      subTitle: 'do Portal do Aluno',
      scope: $scope,
      buttons: [
        { text: 'Fechar' },
        {
          text: 'Sincronizar',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.password) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.data.wifi;
            }
          }
        }
      ]
    });

    myPopup.then(function() {
      SenacService
        .sync($scope.data)
        .then(function(res) {
          positiveAlert();
        });
    });

  }

})

.controller('DisciplinasCtrl', function($scope, Disciplinas, $ionicLoading) {
  $scope.faltas = [];
  $scope.hasClasses = false;
  $scope.filter = false;
  $scope.periodos = [];

  $ionicLoading.show({template: 'Carregando'});


  var all = Disciplinas.all().then(function(data){
    $scope.classes = data;
    $scope.periodos = data
      .map(d => d.periodo)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort();
    $scope.filter = $scope.periodos[$scope.periodos.length - 1];

    if($scope.classes.length){
      $scope.hasClasses = true;
    }

    $ionicLoading.hide();
  });

  $scope.showConceito = function(conceito) {
    return (
      conceito !== 'SC'
      && conceito !== '-'
    );
  }


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
