const express = require('express');
const EventModel = require('../utils/eventmodel');

const router = express.Router();

// get list of all events
router.get('/events', (req, res) => {
  EventModel.find(function(err, events) {
    if (err) res.send(err)

    res.send(events)
  });
});

// get single event
router.get('/event/:id', (req, res) => {
  const { id } = req.params;
  EventModel.findById(id, function(err, event) {
    if (err) res.send(err)

    res.send(event)
  });
})

module.exports = router;