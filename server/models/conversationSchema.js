const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    member:{
        type:Array
    }
})

const conversation = mongoose.model('conversation', conversationSchemas)
module.exports = conversation