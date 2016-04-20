'use strict';
   
angular.module('animalsApp').controller('animalCtrl', function($scope, dataService) {

  //$scope.animals = [{name:"test",weight:12,fed:true}];

  dataService.getAnimals(function(response) {
    $scope.animals =  response.data.animals;
  });

  $scope.addAnimal = function() {
    $scope.animals.unshift({name: "Name", weight: 1, fed: false});
  };

  $scope.deleteAnimal = function(animal, index) {
    dataService.deleteAnimal(animal).then(function() {
      $scope.animals.splice(index, 1);
    });
  };

  $scope.saveAnimal = function(animal, i) {
    $scope.animals[i].editing = false;
    dataService.updateAnimal(animal);
  };

});