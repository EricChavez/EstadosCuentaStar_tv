'use strict';
angular
	.module('softvApp')
	.config(function($stateProvider) {
		var states = [{
				name: 'home',
				data: {
					pageTitle: 'BIENVENIDO | softv WEB',					
				},
				url: '/home',
				views: {
					'homeview': {
						templateUrl: 'views/main.html',
						controller: 'HomeCtrl',
						controllerAs: '$ctrl'
					}
				},
			},
			{
				name: 'auth',
				url: '/auth',
				data: {
					pageTitle: 'BIENVENIDO | softv WEB'
				},
				views: {
					'loginview': {
						templateUrl: 'views/login/login.html',
						controller: 'LoginCtrl',
						controllerAs: '$ctrl'
					}
				},
			},
			{
				name: 'signin',	
				url: '/signin',			
				data: {
					pageTitle: ' REGISTRATE | softv WEB'
				},
				views: {
					'signinview': {
						templateUrl: 'views/signin.html',
						controller: 'signinCtrl',
						controllerAs: '$ctrl'
					}
					}
				},
				{
				name: 'recover',	
				url: '/recover',			
				data: {
					pageTitle: ' RECUPERAR CONTRASEÑA | softv WEB'
				},
				views: {
					'recoverview': {
						templateUrl: 'views/recover.html',
						controller: 'recoverCtrl',
						controllerAs: '$ctrl'
					}
				}		
			}		
			
		];

		states.forEach(function(state) {
			$stateProvider.state(state);
		});
	});
