angular.module('starter.services', [])


.service('AuthService', function($q, $http, USER_ROLES, API_URL) {
  var LOCAL_TOKEN_KEY = '6wnk6myVEw5nZ4D4YrLff3gnCER3RB4L';
  var username = '';
  var isAuthenticated = false;
  var role = '';
  var authToken;

  function useCredentials(token) {
    isAuthenticated = true;
    role = USER_ROLES.admin;
    $http.defaults.headers.Authorization = 'Bearer ' + token;
  }

  function loadUserCredentials() {
    var token = localStorage.getItem(LOCAL_TOKEN_KEY);
    if (token) {
      useCredentials(token);
    }
  }

  function storeUserCredentials(token) {
    localStorage.setItem(LOCAL_TOKEN_KEY, token);
    useCredentials(token);
  }

  function hasToken(){
    return (window.localStorage[LOCAL_TOKEN_KEY]) ? true : false;
  }

  function destroyUserCredentials() {
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    $http.defaults.headers.Authorization = undefined;
    window.localStorage.removeItem(LOCAL_TOKEN_KEY);
  }

  var login = function(data) {
   return $q(function(resolve, reject) {
      $http({
        method : 'POST',
        url : API_URL + '/user/auth',
        data : data
      }).then(function(res){
        if(res.status === 200 && res.data.token){
          window.localStorage.setItem('user_email', data.email);
          storeUserCredentials(res.data.token);
          resolve('Login success.');
        }else{
          reject('Login Failed.');
        }
      })
      .catch(function(){
        reject('err');
      });
    });
  };

  var get = function() {
   return $q(function(resolve, reject) {
      $http({
        method : 'GET',
        url : API_URL + '/user',
      }).then(function(res){
        if(res.status === 200){
          resolve(res.data);
        }else{
          reject('Login Failed.');
        }
      })
      .catch(function(){
        reject('err');
      });
    });
  };

  var create = function(data) {
   return $q(function(resolve, reject) {
      $http({
        method : 'POST',
        url : API_URL + '/user',
        data : data
      }).then(function(res){
        if(res.status === 200 && res){
          resolve('Login success.');
        }else{
          reject('Login Failed.');
        }
      })
      .catch(function(){
        reject('err');
      });
    });
  };

  var logout = function() {
    destroyUserCredentials();
  };

  var isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
      authorizedRoles = [authorizedRoles];
    }
    return (isAuthenticated && authorizedRoles.indexOf(role) !== -1);
  };

  loadUserCredentials();

  return {
    login: login,
    get: get,
    create: create,
    loadUserCredentials : loadUserCredentials,
    destroyUserCredentials: destroyUserCredentials,
    logout: logout,
    isAuthorized: isAuthorized,
    isAuthenticated: function() {return isAuthenticated;},
    username: function() {return username;},
    role: function() {return role;},
    hasToken : hasToken
  };
})

.service('SenacService', function($q, $http, API_URL){

  var create = function(data) {
   return $q(function(resolve, reject) {
      $http({
        method : 'PUT',
        url : API_URL + '/senac/associate',
        data : data
      }).then(function(res){
        if(res.status === 200 && res){
          var credentials = Object.assign({}, data);
          delete credentials.password;
          window.localStorage.setItem('senacCredentials', JSON.stringify(credentials))
          resolve('User associated.');
        }else{
          reject('User associate failed.');
        }
      })
      .catch(function(){
        reject('err');
      });
    });
  };

  var login = function(data) {
   return $q(function(resolve, reject) {
      $http({
        method : 'POST',
        url : API_URL + '/senac/login',
        data : data
      }).then(function(res){
        if(res.status === 200 && res){
          resolve('User associated.');
        }else{
          reject('User associate failed.');
        }
      })
      .catch(function(){
        reject('err');
      });
    });
  };

  var sync = function(data) {
   return $q(function(resolve, reject) {
      $http({
        method : 'POST',
        url : API_URL + '/senac/sync',
        data : data
      }).then(function(res){
        if(res.status === 200 && res){
          resolve('User associated.');
        }else{
          reject('User associate failed.');
        }
      })
      .catch(function(){
        reject('err');
      });
    });
  };

  return {
    create: create,
    login: login,
    sync: sync
  }

})

.factory('Disciplinas', function($q, $http, API_URL) {

  var all = function(data) {
    return $q(function(resolve, reject) {
      var cache = window.localStorage.getItem('classes');
      if (cache) {
        resolve(JSON.parse(cache));
      }
      else{
        $http({
          method : 'GET',
          url : API_URL + '/classes',
        }).then(function(res){
          if(res.status === 200 && res){
            window.localStorage.setItem('classes', JSON.stringify(res.data));
            resolve(res.data);
          }else{
            reject(res.status);
          }
        })
        .catch(function(){
          reject('err');
        });
      }
    });
  };

  return {
    all: all
  };
})
