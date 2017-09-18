'use strict';
angular.module('softvApp')
  .controller('dashboardCtrl', function (filesFactory, $localStorage, globalService, $sce) {


    function init() {
      filesFactory.Getdocumentosdisponibles($localStorage.currentUser.contrato)
        .then(function (response) {
          vm.documentos = response.GetdocumentosdisponiblesResult;
          vm.sindocumentos = (vm.documentos.length > 0) ? false : true;
          console.log(response);
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
          // filesFactory.GetDeletedocumentos(response.GetdocumentosResult[0].Nombre).then(function (data) {});

        });
    }
    var vm = this;
    vm.descargar = descargar;

    init();

  });
