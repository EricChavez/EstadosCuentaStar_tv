'use strict';
angular.module('softvApp')
  .factory('authFactory', function ($http, $q, $window, globalService, $localStorage, $location, $base64) {
    var factory = {};
    var paths = {
      login: '/Usuario/LogOn'      
    };
    factory.login = function (user, password) {
      var token = $base64.encode(user + ':' + password);
      var deferred = $q.defer();
      var Parametros = {};
      var config = {
        headers: {
          'Authorization': 'Basic ' + token
        }
      };
      $http.post(globalService.getUrl() + paths.login, JSON.stringify(Parametros), config)
        .then(function (response) {
          console.log(response);
          if (response.data.LogOnResult.Token) {
            $localStorage.currentUser = {
              token: response.data.LogOnResult.Codigo,
              token1: token,
              usuario: response.data.LogOnResult.usuario,
              contrato:response.data.LogOnResult.contrato
            
            };
            console.log($localStorage.currentUser);
            deferred.resolve(true);
          } else {
            deferred.resolve(false);
          }
        })
        .catch(function (response) {

          deferred.reject(response.statusText);
        });
      return deferred.promise;
    };


    return factory;
  });
