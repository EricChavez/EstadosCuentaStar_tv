'use strict';
angular.module('softvApp')
  .controller('dashboardCtrl', function (filesFactory, $localStorage, globalService, $sce) {


    function init() {
      filesFactory.Getdocumentos($localStorage.currentUser.contrato, 0)
        .then(function (response) {
          vm.Importe = response.GetdocumentosResult[0].Importe;
          vm.Fecha = response.GetdocumentosResult[0].Fecha;
          vm.Ticket = response.GetdocumentosResult[0].Ticket;
        });
    }




    function descargar(op) {
      filesFactory.Getdocumentos($localStorage.currentUser.contrato, op)
        .then(function (response) {
          vm.url = globalService.getUrlReportes() + '/Reportes/' + response.GetdocumentosResult[0].Nombre;
          //document.getElementById("downloadbtn").click();
          var anchor = angular.element('<a/>');
          anchor.attr({
            href: vm.url,
            target: '_blank',
            download: vm.url
          })[0].click();
          filesFactory.GetDeletedocumentos(response.GetdocumentosResult[0].Nombre).then(function (data) {});

        });
    }
    var vm = this;
    vm.descargar = descargar;

    init();

  });
