'use strict';
angular
  .module('softvApp')
  .controller('recoverCtrl', function (signInFactory, ngNotify, moment, $base64, vcRecaptchaService, authFactory,$window) {



    function validar() {
      signInFactory.GetValidaRecoverPassword(vm.serie, vm.email).then(function (result) {
        if (result.data.GetValidaRecoverPasswordResult > 0) {
          vm.showvalidationform = false;
          vm.showresetform = true;
          vm.contrato = result.data.GetValidaRecoverPasswordResult;
        } else {
          ngNotify.set('No se encpntró ninguna cuenta activa con los datos proporcionados ', 'error');
        }
      });
    }

    function reset() {

      signInFactory.GetUpdateCliente(vm.contrato, vm.email, vm.nuepass).then(function (response) {

        ngNotify.set('Los accesos se han modificando correctamente', 'success');
        authFactory.login(vm.user, vm.password).then(function (data) {
          if (data) {
            $window.location.reload();
          } else {
            ngNotify.set('Datos de acceso erróneos', 'error');
          }

        });
      });

    }


    var vm = this;
    vm.validar = validar;
    vm.reset = reset;
    vm.showvalidationform = true;
    vm.showresetform = false;
    vm.contrato = 0;


    vm.captcharesponse = null;
    vm.widgetId = null;
    vm.captcha = {
      key: '6Lf9hzYUAAAAAPKN-w3LREiE1RgSOMYQ6U3sE_CH'
    };
    vm.setResponse = function (response) {
      console.info('Response available');
      vm.captcharesponse = response;
    };
    vm.setWidgetId = function (widgetId) {
      console.info('Created widget ID: %s', widgetId);
      vm.widgetId = widgetId;
    };
    vm.cbExpiration = function () {
      console.info('Captcha expired. Resetting response object');
      vcRecaptchaService.reload(vm.widgetId);
      vm.captcharesponse = null;
    };
  });
