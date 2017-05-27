
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
    function($rootScope, $scope, $state, $location, AuthService, $ionicPopup, $ionicLoading){
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
          $state.go('tab.disciplinas', {}, {reload: true});
          $rootScope.$broadcast('FIRST_LOGIN');
          $ionicLoading.hide();
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
  function($scope, $state, $location, SenacService, AuthService, $ionicPopup, $ionicLoading){
    var senacCredentials = window.localStorage.getItem('senacCredentials');
    var isSyncing = window.localStorage.getItem('isSyncing');
    var data = senacCredentials ? JSON.parse(senacCredentials): false;
    $scope.isSyncing = isSyncing === 'true';

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

    $scope.isFilled = function(valid){
      return valid === true ? 'valid' : 'invalid';
    };

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
        window.localStorage.setItem('isSyncing', true);
        SenacService.login(data);

        var alertPopup = $ionicPopup.alert({
          template: 'Sua solicitação foi enviada, você será notificado quando o processo terminar!'
        })

        alertPopup.then(function(res) {
          pingIsSync();
          $state.go('tab.account');
        });

      }, function() {
        $ionicLoading.hide();
        $ionicPopup.alert({
          title: 'Falha!',
          template: 'Desculpe, houve um problema ao cadastrar o usuário!'
        });
      });
    };

    function pingIsSync(){
      var intervalId = setInterval(function(){
        AuthService
          .get()
          .then(function(data){
            if(data.senacCredentials && !data.senacCredentials.isSyncing){
              window.localStorage.setItem('isSyncing', data.senacCredentials.isSyncing);
              clearInterval(intervalId);
            }
          });
      }, 10000);
    }
  })

.controller('SyncCtrl',
  function($scope, $state, $location, SenacService, AuthService, $ionicPopup, $ionicLoading){
  var senacCredentials = window.localStorage.getItem('senacCredentials');
  var isSyncing = window.localStorage.getItem('isSyncing');

  $scope.data = senacCredentials ? JSON.parse(senacCredentials): false;
  $scope.isSyncing = isSyncing === 'true';

  function pingIsSync(){
    var intervalId = setInterval(function(){
      AuthService
        .get()
        .then(function(data){
          if(data.senacCredentials && !data.senacCredentials.isSyncing){
            window.localStorage.setItem('isSyncing', data.senacCredentials.isSyncing);
            clearInterval(intervalId);
          }
        });
    }, 10000);
  }

  function positiveAlert(){
    $scope.isSyncing = true;
    window.localStorage.setItem('isSyncing', true);
    pingIsSync();
    $ionicPopup.alert({
      template: 'Solicitação enviada! Você será notificado quando a sincronia dos dados finalizar'
    });
  }

  if(!$scope.isSyncing){
    if ($scope.data === false){
      var alertPopup = $ionicPopup.alert({
        template: 'Antes de sincronizar os dados, você precisa associar sua conta do Portal do Aluno'
      });

      alertPopup.then(function(res) {
        $state.go('tab.account-senac');
      });
    }
    else if ($scope.data.storePassword) {
      SenacService
        .sync($scope.data)
        .then(function(res) {
          positiveAlert();
        });
    }
    else {
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
  }

})

.controller('DisciplinasCtrl',
  function($rootScope, $scope, $state, Disciplinas, AuthService, $ionicLoading) {
  var cache = window.localStorage.getItem('classes') || '[]';
  var data = JSON.parse(cache);

  $scope.hasClasses = false;
  $scope.filter = false;
  $scope.periodos = [];
  $rootScope.$on('refreshData', $scope.doRefresh);

  if(data.length){
    setDataToScope(data);
    $scope.hasClasses = ($scope.classes.length > 0);
  }


  function getPeriodos(data){
    return data
      .map(d => d.periodo)
      .filter((value, index, self) => self.indexOf(value) === index)
      .sort();
  }

  function setDataToScope(data){
    $scope.classes = data;
    $scope.periodos = getPeriodos(data);
    $scope.filter = $scope.periodos[$scope.periodos.length - 1];
  }

  $scope.doRefresh = function(){
    $ionicLoading.show({template: 'Carregando'});
    Disciplinas.all()
      .then(function(data){
        window.localStorage.setItem('classes', JSON.stringify(data));
        setDataToScope(data);
        $scope.hasClasses = ($scope.classes.length > 0);
        $ionicLoading.hide();
        $scope.$broadcast('scroll.refreshComplete');
      })
      .catch(function(){
        $ionicLoading.hide();
        $scope.$broadcast('scroll.refreshComplete');
        AuthService.logout();
        $state.go('login');
      })
  };

  $scope.showConceito = function(conceito) {
    return (
      conceito !== 'SC'
      && conceito !== '-'
    );
  }
})

.controller('AccountCtrl',
  function($scope, $state, AuthService) {
  $scope.settings = {
    enableFriends: true
  };

  $scope.logout = function(){
    AuthService.destroyUserCredentials();
    $state.go('login', {}, {reload: true});
  }
});
