const mongoose = require('mongoose')

const messegeSchema = new mongoose.Schema({
    cconversationId: {
        type: String
    },
    senderId: {
        type: String
    },
    text: {
        type: String
    }
})

const messege = mongoose.model('messege', messegeSchema)
module.exports = messege