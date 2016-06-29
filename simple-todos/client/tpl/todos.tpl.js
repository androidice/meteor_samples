import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todos.tpl.html';

(function() {
	angular.module('todos', [angularMeteor]).controller('todoCtrl', ['$scope', function($scope) {
		this.tasks = [{
			text: 'This is task 1'
		}, {
			text: 'This is task 2'
		}, {
			text: 'This is task 3'
		}];
	}]);
})();