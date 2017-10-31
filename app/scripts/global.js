'use strict';
angular
  .module('softvApp')
  .service('globalService', function () {
    var svc = {};
    svc.getUrl = function() {
      return 'http://192.168.50.33:6060/SoftvWCFService.svc';    
    	};

      svc.getUrlregistro = function() {
      return 'http://192.168.50.31:6070/SoftvWCFService.svc';    
    	};

    	svc.getUrlReportes = function() {
    		return 'http://192.168.50.33:6060/';
    	};

    

    return svc;
  });
