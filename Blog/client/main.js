import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './main.html';

(function() {
	angular.module('Blog', [angularMeteor, uiRouter]).config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
		function($stateProvider, $locationProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");
			$stateProvider
				.state('home',{
					url:'/',
					templateUrl: 'client/pages/home/index.html'
				})
				.state('products',{
					url:'/products',
					templateUrl: 'client/pages/products/index.html'
				})
				.state("events",{
					url:'/events',
					templateUrl: 'client/pages/events/index.html'
				});

			$locationProvider.html5Mode(true);
			console.log('Blog config loaded...');
		}
	]);
})();