'use strict';
angular
  .module('softvApp')
  .service('globalService', function () {
    var svc = {};
    svc.getUrl = function() {    
     // return 'http://localhost:64481/SoftvWCFService.svc';
     return 'https://realizarpago.stargroup.com.mx:5050/SoftvWCFService.svc';
      // return 'http://189.204.147.26:5000/SoftvWCFService.svc'; 
     // return 'http://172.16.126.44:5000/SoftvWCFService.svc';    
    	};

      svc.getUrlregistro = function() {
      //return 'http://172.16.126.44:5050/SoftvWCFService.svc';    
      return 'https://realizarpago.stargroup.com.mx:5000/SoftvWCFService.svc';    
    	};

      svc.getUrlReportes = function() {
       // return 'http://localhost:64481';
        
        return 'https://realizarpago.stargroup.com.mx:5050';
    		//return 'http://189.204.147.26:5000';
    	};

    

    return svc;
  });
