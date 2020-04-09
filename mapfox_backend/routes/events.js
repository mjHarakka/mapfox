const express = require('express');
const router = express.Router();
const Event = require('../models/Event');



//get back all the events
/*
router.get('/', (req, res, next) => {
    Event.find({}, null, {sort: {_id: -1}}, (error, events) => {
      if (error) return next(error)
      res.send(events)
    })
  })
*/
router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events)
    } catch (err) {
        res.json({ message: err })
    }
});
//add an event

router.post('/', async (req, res) => {

    const event = new Event({
        title: req.body.title,
        description: req.body.description,
        startingLocation: req.body.startingLocation,
        isEventChildFriendly: req.body.isEventChildFriendly,
        pinCode: req.body.pinCode,
        tags: req.body.tags,
        places: req.body.places
        
    });
    console.log(event.places)
    try {
        const savedEvent = event.save()
        res.json(savedEvent)
    } catch (err) {
        res.json({ message: err })
    }
});

//get back a certain event by using the _id as your fetch endpoint
router.get('/:eventId', async (req, res) => {
    try {
        const event = await Event.findById(req.params.eventId);
        res.json(event)
    } catch (err) {
        res.json({ message: err });
    }
});

//Delete one Event based on the id, the function will compare the id to the given endpoint
//for example http://localhost:8080/events/5e7a62920809ca45d8473520 send it as an delete method
router.delete('/:eventId', async (req, res) => {
    try {
        const removedEvent = await Event.remove({ _id: req.params.eventId })
        res.json(removedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update an event, its been given a updating field as a parameter
//for example http://localhost:8080/events/5e7a62920809ca45d8473520 send it as a patch method
router.patch('/:eventId', async (req, res) => {
    try {
        const updatedEvent = await Event.updateOne(
            { _id: req.params.eventId },
            { $set: {
                title: req.body.title,
                description: req.body.description
            } }
        );
        res.json(updatedEvent);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;