'use strict';
angular
  .module('softvApp')
  .controller('signinCtrl', function (signInFactory, ngNotify) {
    function initialData() {

    }

    function confirmar() {
      signInFactory.GetvalidaAparato(vm.serie)
        .then(function (result) {
          console.log(result.data.GetvalidaAparatoResult);
          vm.user = result.data.GetvalidaAparatoResult;
          vm.showcapturaserie = false;
          vm.showinfo = true;
          console.log(vm.user);
        });
    }

    function Registrar() {
      signInFactory.Getregistracliente(vm.user.Contrato, vm.email, vm.password).then(function (result) {
        if (result.GetregistraclienteResult == 0) {
          ngNotify.set('Ha ocurrido un error al registrar el usuario', 'error');
        }
        if (result.GetregistraclienteResult == 1) {
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
  });
