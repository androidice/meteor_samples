import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './index.html';
(function(){
	angular.module('blog.module').controller('homeCtrl',['$scope',function($scope){
		$scope.title = "Home Page Title";
	}]);
})();
