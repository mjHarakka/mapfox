const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startingLocation: {
        type: String,
        required: false
    },
    isEventChildFriendly: {
        type: Boolean,
        required: false
    },
    pinCode: {
        type: Number,
        required: false
    },
    tags: [{
        tag: {
            type: String,
            required: false 
        }
    }],
    places: [
        {
            name: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: false
            },
            latitude: {
                type: Number,
                required: true
            },
            longitude: {
                type: Number,
                required: true
            }
        }
    ]
    
})

module.exports = mongoose.model('Events', EventSchema);