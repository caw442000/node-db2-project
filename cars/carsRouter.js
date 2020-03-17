const express = require('express');

const router = express.Router();


const db = require('../data/connection.js')

router.get('/', (req, res) => {
  db('cars').then(cars => {
    res.status(200).json(cars)
  }).catch(err => {
    res.status(500).json({ message: 'Failed to retrieve fruits' });
  });
  
});

router.post('/', (req, res) => {
  const carData = req.body;
  db('cars').insert(carData)
  .then(ids => {
    db('cars').where({id: ids[0]}).first()
    .then(car => {
      res.status(201).json(car);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to grab car' });
  
    })
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to add car' });

  })
})

module.exports = router;