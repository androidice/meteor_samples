import angular from 'angular';
import angularMeteor from 'angular-meteor';
(function() {
	angular.module('app', [angularMeteor, 'todos', 'completedList']);
})();