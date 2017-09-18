'use strict';
angular
  .module('softvApp')
  .factory('filesFactory', function ($http, $q, globalService, $localStorage) {
    var factory = {};
    var paths = {
      Getdocumentos: '/Usuario/Getdocumentos',
      GetDeletedocumentos: '/Usuario/GetDeletedocumentos',
       Getdocumentosdisponibles: '/Usuario/Getdocumentosdisponibles'
    };


factory.Getdocumentosdisponibles = function (contrato) {      
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      var Parametros = {
        'contrato': contrato      
      };
      console.log(Parametros);    
      $http.post(globalService.getUrl() + paths.Getdocumentosdisponibles, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });
      return deferred.promise;
    };



    factory.GetDeletedocumentos = function (nombre) {      
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      var Parametros = {
        'nombre': nombre      
      };
      console.log(Parametros);    
      $http.post(globalService.getUrl() + paths.GetDeletedocumentos, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });
      return deferred.promise;
    };

    factory.Getdocumentos = function (contrato, op) {
      var deferred = $q.defer();
      var config = {
        headers: {
          'Authorization': $localStorage.currentUser.token
        }
      };
      var Parametros = {
        'contrato': contrato,
        'op': op
      };
      console.log(Parametros);
      $http.post(globalService.getUrl() + paths.Getdocumentos, JSON.stringify(Parametros), config).then(function (response) {
        deferred.resolve(response.data);
      }).catch(function (response) {
        deferred.reject(response.data);
      });
      return deferred.promise;
    };


    return factory;

  });
