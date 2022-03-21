const express = require('express');

const events = [
  {
    title: "Healthcare Track",
    description: "This session seeks to get people thinking about the ultimate objective of healthcare AI",
    category: "AI",
    date: "2021-07-17T10:00:00.000Z",
    isVirtual: false,
    address: "London, United Kingdom"
  },
  {
    title: "Robotics Track",
    description: "This session seeks to get people thinking about the ultimate objective of robotics",
    category: "robotics",
    date: "2021-04-17T10:00:00.000Z",
    isVirtual: false,
    address: "Bristol, United Kingdom"
  },
  {
    title: "Mobile Development Track",
    description: "This session seeks to get people thinking about the ultimate objective of mobile development",
    category: "mobile",
    date: "2021-12-17T10:00:00.000Z",
    isVirtual: false,
    address: "Coventry, United Kingdom"
  },
  {
    title: "More Track",
    description: "This session seeks to get people thinking about the ultimate objective of more AI",
    category: "more",
    date: "2021-08-17T10:00:00.000Z",
    isVirtual: true,
    address: "London, United Kingdom"
  }
];

const router = express.Router();
// get list of events
router.get('/events', (req, res) => {
  res.send(events)
});
// get single event
router.get('/event/:name', (req, res) => {
  const event = events.find(event => req.params.name === event.title)
  res.send(event)
})

module.exports = router;