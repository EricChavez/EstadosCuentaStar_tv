'use strict';
angular
  .module('softvApp')
  .controller('signinCtrl', function (signInFactory) {
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
        console.log(result);
      });
    }

    var vm = this;
    vm.confirmar = confirmar;
    vm.showcapturaserie = true;
    vm.showinfo = false;
    vm.Registrar=Registrar;
    initialData();
  });
