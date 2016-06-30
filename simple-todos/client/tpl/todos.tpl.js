import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './todos.tpl.html';
import {Tasks} from '../../imports/api/tasks.js';


(function() {
	angular.module('todos', [angularMeteor]).controller('todoCtrl', ['$scope', '$reactive', function($scope, $reactive) {
		var self = this;
		$reactive(self).attach($scope);


		self.autorun(function() {
			self.subscribe('tasks');
		});

		self.helpers({
			tasks() {
				return Tasks.find({});
			}

		});

		self.addTask = function(newTask) {
			// Insert a task into the collection
			Tasks.insert({
				text: newTask,
				createdAt: new Date()
			});

			// Clear form
			self.newTask = '';
		};

		self.completeTask = function(id, currentState) {
			Meteor.call("updateTask", id, currentState);
		};

	}]);
})();