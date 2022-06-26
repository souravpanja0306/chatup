const mongoose = require('mongoose')
const conversationSchema = require('../models/conversationSchema')


// conversation data send to Mongodb
const conversationPost = async (req, res) => {
    const newConversation = new conversationSchema({
        members: [req.body.senderId, req.body.receiverId]
    })

    try {
        const saveConversation = newConversation.save()
        res.status(200).json(saveConversation)
    } catch (error) {
        res.status(500).json(error)
    }
}


// Sender and Receiver details find from conversation by ID
const conversationGet = async (req, res) => {
    try {
        const convData = await conversationSchema.find({
            members: { $in: [req.params.userId] }
        })
        // res.status(200).json(convData)
        res.send(convData)

    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = { conversationPost, conversationGet }