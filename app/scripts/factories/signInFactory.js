'use strict';
angular.module('softvApp')
  .factory('signInFactory', function ($http, $q, $window, globalService, $timeout) {
    var factory = {};
    var paths = {
      GetvalidaAparato: '/SessionWeb/GetvalidaAparato',
      Getregistracliente: '/SessionWeb/Getregistracliente',
      GetValidaRecoverPassword: '/SessionWeb/GetValidaRecoverPassword',
      GetUpdateCliente: '/SessionWeb/GetUpdateCliente',
      validateEmail:'/SessionWeb/validateEmail'
    };


    factory.validateEmail = function (email,contrato) {
      var deferred = $q.defer();
      var Parametros = {
        'email': email,
        'contrato':contrato     
      };
      var config = {
        headers: {
          'Authorization': 'Basic ' + ''
        }
      };
      
      $http.post(globalService.getUrlregistro() + paths.validateEmail, JSON.stringify(Parametros), config)
        .then(function (response) {
          $timeout(function() {
            deferred.resolve(response);
          }, 1000);
         
        })
        .catch(function (response) {

          deferred.reject(response.statusText);
        });
      return deferred.promise;
    };



    factory.GetUpdateCliente = function (contrato, correo, password) {
      var deferred = $q.defer();
      var Parametros = {
        'contrato': contrato,
        'correo': correo,
        'password': password
      };
      var config = {
        headers: {
          'Authorization': 'Basic ' + ''
        }
      };
      console.log(Parametros);
      $http.post(globalService.getUrlregistro() + paths.GetUpdateCliente, JSON.stringify(Parametros), config)
        .then(function (response) {
          deferred.resolve(response);
        })
        .catch(function (response) {

          deferred.reject(response.statusText);
        });
      return deferred.promise;
    };



    factory.GetValidaRecoverPassword = function (serie, email) {
      var deferred = $q.defer();
      var Parametros = {
        'id': 0,
        'serie': serie,
        'email': email
      };
      var config = {
        headers: {
          'Authorization': 'Basic ' + ''
        }
      };
      $http.post(globalService.getUrlregistro() + paths.GetValidaRecoverPassword, JSON.stringify(Parametros), config)
        .then(function (response) {
          deferred.resolve(response);
        })
        .catch(function (response) {

          deferred.reject(response.statusText);
        });
      return deferred.promise;
    };


  







    factory.GetvalidaAparato = function (serie) {
      var deferred = $q.defer();
      var Parametros = {
        'id': 0,
        'serie': serie
      };
      var config = {
        headers: {
          'Authorization': 'Basic ' + ''
        }
      };
      $http.post(globalService.getUrlregistro() + paths.GetvalidaAparato, JSON.stringify(Parametros), config)
        .then(function (response) {
          $timeout(function() {
            deferred.resolve(response);
          }, 3000);
        })
        .catch(function (response) {

          deferred.reject(response.statusText);
        });
      return deferred.promise;
    };

    factory.Getregistracliente = function (contrato, login, pasaporte) {
      var deferred = $q.defer();
      var Parametros = {
        'contrato': contrato,
        'login': login,
        'pasaporte': pasaporte
      };
      var config = {
        headers: {
          'Authorization': 'Basic ' + ''
        }
      };
      $http.post(globalService.getUrlregistro() + paths.Getregistracliente, JSON.stringify(Parametros), config)
        .then(function (response) {
          deferred.resolve(response);
        })
        .catch(function (response) {

          deferred.reject(response.statusText);
        });
      return deferred.promise;
    };


    return factory;
  });
