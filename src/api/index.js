'use strict';

var express = require('express');
var Animal = require('../models/animal');

var router = express.Router();

// get all animals
router.get('/animals', function(req, res) {
  Animal.find({}, function(err, animals) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ animals: animals });
  });
});

// add new animal
router.post('/animals', function(req, res) {
  var new_animal = req.body;
  Animal.create(new_animal, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'animal': new_animal, message: 'Animal added to db' });
  });
});

// update one animal
router.put('/animals/:id', function(req, res) {
  var id = req.params.id;
  var animal = req.body;
  if (animal && animal._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }
  Animal.findByIdAndUpdate(id, animal, {new: true}, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'animal': animal, message: 'Animal updated' });
  });
});

// delete animal from db
router.delete('/animals/:id', function(req, res) {
  var id = req.params.id;
  Animal.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Animal deleted' });
  });
});

module.exports = router;