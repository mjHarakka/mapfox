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
    location: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Events', EventSchema);