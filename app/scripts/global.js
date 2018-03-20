'use strict';
angular
  .module('softvApp')
  .service('globalService', function () {
    var svc = {};
    svc.getUrl = function() {
      return 'http://172.16.126.44:5000/SoftvWCFService.svc';    
    	};

      svc.getUrlregistro = function() {
      return 'http://172.16.126.44:5050/SoftvWCFService.svc';    
    	};

    	svc.getUrlReportes = function() {
    		return 'http://172.16.125.44:5000/';
    	};

    

    return svc;
  });
