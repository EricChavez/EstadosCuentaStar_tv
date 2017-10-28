'use strict';
angular.module('softvApp')
  .factory('signInFactory', function ($http, $q, $window, globalService, $localStorage, $location, $base64) {
    var factory = {};
    var paths = {
      GetvalidaAparato: '/SessionWeb/GetvalidaAparato',
      Getregistracliente:'/SessionWeb/Getregistracliente',
      GetValidaRecoverPassword:'/SessionWeb/GetValidaRecoverPassword'
    };

    factory.GetValidaRecoverPassword = function (serie,email) {
      var deferred = $q.defer();
      var Parametros = {
        'id':0,
        'serie': serie,
        'email': email
      };
      var config = {
        headers: {
          'Authorization': 'Basic ' + ''
        }
      };
      $http.post(globalService.getUrl() + paths.GetValidaRecoverPassword, JSON.stringify(Parametros),config)
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
      $http.post(globalService.getUrl() + paths.GetvalidaAparato, JSON.stringify(Parametros),config)
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
      $http.post(globalService.getUrl() + paths.GetvalidaAparato, JSON.stringify(Parametros),config)
        .then(function (response) {         
          deferred.resolve(response);
        })
        .catch(function (response) {

          deferred.reject(response.statusText);
        });
      return deferred.promise;
    };

    factory.Getregistracliente = function (contrato,login,pasaporte) {
      var deferred = $q.defer();
      var Parametros = {
        'contrato': contrato,
        'login': login,
        'pasaporte':pasaporte
      };
      var config = {
        headers: {
          'Authorization': 'Basic ' + ''
        }
      };
      $http.post(globalService.getUrl() + paths.Getregistracliente, JSON.stringify(Parametros),config)
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
