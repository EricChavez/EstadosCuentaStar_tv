'use strict';
angular.module('softvApp').config(function ($stateProvider) {
  var states = [{
      name: 'ayuda',
      abstract: true,
      template: '<div ui-view></div>'
    },    
    {
      name: 'ayuda.identifica',
      data: {
        pageTitle: 'SOFTV | ayuda',
      },
      url: '/ayuda',
      templateUrl: 'views/ayuda.html',
      controller: 'ayudaCtrl',
      controllerAs: '$ctrl'
    }


    
  ];

  states.forEach(function (state) {
    $stateProvider.state(state);
  });
});
