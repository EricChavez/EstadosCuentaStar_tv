'use strict';
angular
  .module('softvApp')
  .controller('signinCtrl', function ($localStorage, $location, $window, $state, filesFactory) {
    function initialData() {
      
    }

    function confirmar() {
      alert('confirmar');
    }

    var vm = this;
    vm.confirmar = confirmar;

    initialData();
  });
