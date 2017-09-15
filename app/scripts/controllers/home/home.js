'use strict';
angular
  .module('softvApp')
  .controller('HomeCtrl', function ($localStorage, $location, $window, $state, filesFactory) {
    function initialData() {

      if ($localStorage.currentUser) {      
        vm.usuario = $localStorage.currentUser.usuario;
       
      } else {
        $state.go('auth');

      }
    }

    function logout() {
      delete $localStorage.currentUser;
      $window.location.reload();
    }

	



    var vm = this;
    vm.logout = logout;
    initialData();
  });
