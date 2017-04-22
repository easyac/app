angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform, $ionicPopup, $ionicHistory, $window, $rootScope, $state, AuthService, AUTH_EVENTS) {
  // $ionicPlatform.ready(function() {
    // if(AuthService.hasToken()){
    //   $state.go('tab.disciplinas');
    // }else{
    //   $state.go('login');
    // }
  // })

  $ionicPlatform.registerBackButtonAction(function(event) {
    if ($state.current.name === 'app') {
      $ionicPopup.confirm({
        title: 'Alerta!',
        template: 'Você tem certeza que deseja sair?'
      }).then(function(res) {
        if (res) {
          ionic.Platform.exitApp();
        }
      });
    }else{
      $ionicHistory.goBack();
    }
  }, 100);

  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

    $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
      if ('data' in next && 'authorizedRoles' in next.data) {
        var authorizedRoles = next.data.authorizedRoles;
        if (!AuthService.isAuthorized(authorizedRoles)) {
          event.preventDefault();
          $state.go($state.current, {}, {reload: true});
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        }
      }

      if (!AuthService.isAuthenticated()) {
        if (next.name !== 'login') {
          event.preventDefault();
          $state.go('login');
        }
      }else{
        AuthService.loadUserCredentials();
      }
    });
  });
})

// .constant('API_URL', 'https://api.easyac.xyz')
.constant('API_URL', 'http://localhost:3000')

.config(function($ionicConfigProvider) {
    $ionicConfigProvider.tabs.position('bottom');
})

.constant('AUTH_EVENTS', {
  notAuthenticated: 'auth-not-authenticated',
  notAuthorized: 'auth-not-authorized'
})

.constant('USER_ROLES', {
  admin: 'admin_role',
  public: 'public_role'
})

.config([
  '$httpProvider',
  function ($httpProvider){
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    $httpProvider.interceptors.push('httpRequestInterceptor');
    $httpProvider.interceptors.push('AuthInterceptor');
  }
])

.factory('AuthInterceptor', function ($rootScope, $q, AUTH_EVENTS) {
  return {
    responseError: function (response) {
      $rootScope.$broadcast({
        401: AUTH_EVENTS.notAuthenticated,
        403: AUTH_EVENTS.notAuthorized
      }[response.status], response);
      return $q.reject(response);
    }
  };
})

.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      var token = localStorage.getItem('6wnk6myVEw5nZ4D4YrLff3gnCER3RB4L');
      if(token){
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    }
  };
})


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('login', {
    url: '/',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('cadastro', {
    url: '/cadastre-se',
    templateUrl: 'templates/cadastre-se.html',
    controller: 'CadastroCtrl'
  })

  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  .state('tab.disciplinas', {
    url: '/disciplinas',
    views: {
      'tab-disciplinas': {
        templateUrl: 'templates/tab-disciplinas.html',
        controller: 'DisciplinasCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      },
    }
  })
  .state('tab.account-senac', {
    url: '/account/senac',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-senac.html',
        controller: 'SenacCtrl'
      }
    }
  })
  .state('tab.account-sync', {
    url: '/account/sync',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-sync.html',
        controller: 'SyncCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise(function ($injector) {
    var $state = $injector.get('$state');
    $state.go('login');
  });
});
