'use strict';

angular.module('animalsApp').service('dataService', function($http) {

  this.getAnimals = function(cb) {
    $http.get('/api/animals').then(cb);
  };

  this.deleteAnimal = function(animal) {
    if (!animal._id) {
      //return $q.resolve();
      console.log("Error, no id");
    }
    return $http.delete('/api/animals/' + animal._id).then(function() {
      console.log("I deleted the " + animal.name);
    });
  };

  this.updateAnimal = function(animal) {
    if(!animal._id) {
      $http.post('/api/animals', animal);
    } else {
      $http.put('/api/animals/' + animal._id, animal).then(function(result) {
        return result.data.animal;
      });
    }
  };

});