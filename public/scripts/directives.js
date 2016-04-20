'use strict';

angular.module('animalsApp').directive('animalDirective', function AnimalDirective () {
	return {
		templateUrl: 'templates/animal.html',
		replace: true,
		controller: 'animalCtrl'
	}
});