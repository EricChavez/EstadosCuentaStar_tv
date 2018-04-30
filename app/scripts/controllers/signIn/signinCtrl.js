'use strict';
angular
  .module('softvApp')
  .controller('signinCtrl', function (signInFactory, ngNotify, vcRecaptchaService, $window) {
 
    function confirmar() {
      vm.waitverification=true;
      signInFactory.GetvalidaAparato(vm.serie)
        .then(function (result) {
          vm.waitverification=false;
          if (result.data.GetvalidaAparatoResult.valid === true) {            
            vm.user = result.data.GetvalidaAparatoResult;
            vm.showcapturaserie = false;
            vm.showinfo = true;
           
          } else {
            ngNotify.set(result.data.GetvalidaAparatoResult.message, 'error');
          }

        });
    }

    function Registrar() {
      signInFactory.Getregistracliente(vm.user.Contrato, vm.email, vm.password).then(function (result) {        
        if (result.data.GetregistraclienteResult === 0) {
          ngNotify.set('Ha ocurrido un error al registrar el usuario', 'error');
        }
        if (result.data.GetregistraclienteResult === 1) {
          vm.showsuccess=true;
          vm.showinfo=false;
          /* $window.location.reload();
          ngNotify.set('Se ha registrado correctamente ahora puede iniciar sesión', 'success'); */
        } else {
          ngNotify.set('Hemos detectado una cuenta existente con el correo ingresado', 'error');
        }
      });
    }


    function valideEmail(value) {
      if (value) {
        vm.wait=true;
        vm.showMessageemail=false;
        signInFactory.validateEmail(vm.email, 0).then(function (result) {
          console.log(result);
          vm.wait=false;
          if(result.data.validateEmailResult===true){
            vm.showMessageemail=true;
            vm.iconemail='fa fa-times';
            vm.messageemail='Este correo ya esta registrado en el sistema';

          }else{
            vm.showMessageemail=false;
          }
        });
      }
    }

    var vm = this;    
    vm.wait=false;
    vm.showMessageemail=false;
    vm.confirmar = confirmar;
    vm.waitverification=false;
    vm.showcapturaserie = true;
    vm.showinfo = false;
    vm.Registrar = Registrar;  
    vm.valideEmail = valideEmail;
    vm.captcharesponse = null;
    vm.widgetId = null;
    vm.showsuccess=false;
    vm.captcha = {
      key: '6LctdVYUAAAAAHBn67eI0qWOsdILUtmTYV1B9YVZ'
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
