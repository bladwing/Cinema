const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    _id: {
        type: String
    },
    Title:{
        type: String
    },
    Description: {
        type: String
    },
    videolink: {
        type: String
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
    _v: {
        type: String
    },
    id: { 
        type: String
    }
})

module.exports = mongoose.model('Video', videoSchema);