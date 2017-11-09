'use strict';
angular
  .module('softvApp')
  .controller('recoverCtrl', function (signInFactory, ngNotify, moment, $base64, vcRecaptchaService, authFactory, $window) {



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
      //  ngNotify.set('Los accesos se han modificando correctamente', 'success');      
          vm.showresetform=false;
          if (response) {
            vm.showsuccess=true;
          //  $window.location.reload();
          } else {
            vm.showerr=true;
           // ngNotify.set('Ocurrió un error al tratar de reestablecer yu contraseña', 'error');
          }

       
      });

    }

    function valideEmail(value) {
      if (value) {
        vm.wait = true;
        vm.showMessageemail = false;
        signInFactory.validateEmail(vm.email, vm.contrato).then(function (result) {
          console.log(result);
          vm.wait = false;
          if (result.data.validateEmailResult === true) {
            vm.showMessageemail = true;
            vm.iconemail = 'fa fa-times';
            vm.messageemail = 'Este correo ya esta registrado en el sistema';

          } else {
            vm.showMessageemail = false;
          }
        });
      }
    }


    var vm = this;
    vm.validar = validar;
    vm.reset = reset;
    vm.showvalidationform = true;
    vm.showresetform = false;
    vm.contrato = 0;
    vm.valideEmail = valideEmail;
    vm.wait=false;
    vm.showMessageemail = false;
    vm.captcharesponse = null;
    vm.widgetId = null;
    vm.showsuccess=false;
    vm.showerr=false;
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
