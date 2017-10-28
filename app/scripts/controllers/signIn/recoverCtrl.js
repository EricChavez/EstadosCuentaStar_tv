'use strict';
angular
  .module('softvApp')
  .controller('recoverCtrl', function (signInFactory, ngNotify, moment, $base64) {
    function initialData() {
      moment().format('LLL');
      console.log(moment().format('LLL'));


      var base64EncodedString = $base64.encode('507f1f77bcf86cd799439011' + '.' + moment().format('LLL'));
      var urlSafeBase64EncodedString = encodeURIComponent(base64EncodedString);
      /*
            console.log('base64EncodedString', base64EncodedString);
            console.log('urlSafeBase64EncodedString', urlSafeBase64EncodedString);
            var decodedString = $base64.decode(base64EncodedString);
            console.log('decodedString', decodedString);*/
      // 
    }

    function validar() {
      signInFactory.GetValidaRecoverPassword(vm.serie, vm.email).then(function (result) {
        if (result.data.GetValidaRecoverPasswordResult === true) {
          vm.showvalidationform = false;
          vm.showresetform = true;
        } else {
          ngNotify.set('No se encpntró ninguna cuenta activa con los datos proporcionados ', 'error');
        }
      });
    }

    function reset() {

    }

    var vm = this;
    vm.validar = validar;
    vm.reset = reset;
    vm.showvalidationform = true;
    vm.showresetform = false;
    initialData();
  });
