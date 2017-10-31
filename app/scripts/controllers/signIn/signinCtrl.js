'use strict';
angular
  .module('softvApp')
  .controller('signinCtrl', function (signInFactory, ngNotify, vcRecaptchaService, $window) {
    function initialData() {

    }

    function confirmar() {
      signInFactory.GetvalidaAparato(vm.serie)
        .then(function (result) {

          if (result.data.GetvalidaAparatoResult.valid === true) {
            console.log(result.data.GetvalidaAparatoResult);
            vm.user = result.data.GetvalidaAparatoResult;
            vm.showcapturaserie = false;
            vm.showinfo = true;
            console.log(vm.user);
          } else {
            ngNotify.set(result.data.GetvalidaAparatoResult.message, 'error');
          }

        });
    }

    function Registrar() {
      signInFactory.Getregistracliente(vm.user.Contrato, vm.email, vm.password).then(function (result) {
        console.log(result);
        if (result.data.GetregistraclienteResult === 0) {
          
          ngNotify.set('Ha ocurrido un error al registrar el usuario', 'error');
        }
        if (result.data.GetregistraclienteResult === 1) {
           $window.location.reload();
          ngNotify.set('Se ha registrado correctamente ahora puede iniciar sesión', 'success');
        } else {
          ngNotify.set('Hemos detectado una cuenta existente con el correo ingresado', 'error');
        }
      });
    }

    var vm = this;
    vm.confirmar = confirmar;
    vm.showcapturaserie = true;
    vm.showinfo = false;
    vm.Registrar = Registrar;
    initialData();
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
