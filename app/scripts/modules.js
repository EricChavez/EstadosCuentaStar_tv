"use strict";
angular.module("softvApp").config(function($stateProvider) {
  var states = [
    {
      name: "home",
      data: {
        pageTitle: "BIENVENIDO | softv WEB"
      },
      url: "/home",
      views: {
        homeview: {
          templateUrl: "views/main.html",
          controller: "HomeCtrl",
          controllerAs: "$ctrl"
        }
      }
    },
    {
      name: "auth",
      url: "/auth",
      data: {
        pageTitle: "BIENVENIDO | softv WEB"
      },
      views: {
        loginview: {
          templateUrl: "views/login/login.html",
          controller: "LoginCtrl",
          controllerAs: "$ctrl"
        }
      }
    },
    {
      name: "signin",
      url: "/signin",
      data: {
        pageTitle: " REGISTRATE | softv WEB"
      },
      views: {
        signinview: {
          templateUrl: "views/signin.html",
          controller: "signinCtrl",
          controllerAs: "$ctrl"
        }
      }
    },
     {
      name: "registro",
      url: "/registro",
      data: {
        pageTitle: " REGISTRATE | STAR GO"
      },
      views: {
        signinview: {
          templateUrl: "views/registro.html",
          controller: "signinCtrl",
          controllerAs: "$ctrl"
        }
      }
    }, 
    {
      name: "recuperar",
      url: "/recuperar",
      data: {
        pageTitle: " RECUPERAR CONTRASEÑA | STAR GO"
      },
      views: {
        signinview: {
          templateUrl: "views/recuperar.html",
          controller: "recoverCtrl",
          controllerAs: "$ctrl"
        }
      }
    },
    {
      name: "recover",
      url: "/recover",
      data: {
        pageTitle: " RECUPERAR CONTRASEÑA | softv WEB"
      },
      views: {
        recoverview: {
          templateUrl: "views/recover.html",
          controller: "recoverCtrl",
          controllerAs: "$ctrl"
        }
      }
    },
    {
      name: "ayuda",
      url: "/ayuda",
      data: {
        pageTitle: "star TV| ayuda"
      },
      views: {
        recoverview: {
          templateUrl: "views/ayuda.html",
          controller: "ayudaCtrl",
          controllerAs: "$ctrl"
        }
      }
    },
    {
      name: "ayudaregistro",
      url: "/ayudaregistro",
      data: {
        pageTitle: "star TV| ayuda registro"
      },
      views: {
        recoverview: {
          templateUrl: "views/ayudaRegistro.html",
          controller: "ayudaCtrl",
          controllerAs: "$ctrl"
        }
      }
    }
  ];

  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});
