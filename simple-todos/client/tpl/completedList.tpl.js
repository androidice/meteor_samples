import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './completedList.tpl.js';
import {Tasks} from '../../imports/api/tasks.js';

(function() {
	angular.module('completedList', [angularMeteor]).controller('completedListCtrl', ['$scope', '$reactive', function($scope, $reactive) {
		var self = this;
		$reactive(self).attach($scope);

		self.helpers({
			tasks() {
				return Tasks.find({
					completed: true
				});
			}
		});

		self.methods = {
			revert: function(id, currentState){
				Meteor.call("updateTask", id, !currentState);
			}
		}
	}]);
})();