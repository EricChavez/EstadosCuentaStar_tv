'use strict';
angular.module('softvApp')
  .controller('dashboardCtrl', function (filesFactory, $localStorage, globalService, $sce, $scope, $http) {


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
           if (op==1){
            var dlnk;   
            var pdf='data:application/pdf;base64,'+response.DownloadFileResult.FileByteStream;
            console.log(pdf);
            dlnk = document.getElementById('dwnldLnk');
            console.log(pdf);
            dlnk.href = pdf;
            dlnk.click();
           }

           if (op==2){

            var dlnk;   
            var pdf='data:text/plain;base64,'+response.DownloadFileResult.FileByteStream;
            console.log(pdf);
            dlnk = document.getElementById('dwnldLnk3');
            console.log(pdf);
            dlnk.href = pdf;
            dlnk.click();
           }

           if (op==3){
            var dlnk;   
            var pdf='data:application/pdf;base64,'+response.DownloadFileResult.FileByteStream;
            console.log(pdf);
            dlnk = document.getElementById('dwnldLnk2');
            console.log(pdf);
            dlnk.href = pdf;
            dlnk.click();
           }    
          

        });
    }
    var vm = this;
    vm.descargar = descargar;

    init();

  });
