const messegeSchema = require('../models/messegeSchema')


// Post Messege
const messegePost = async (req, res) => {
    const newMessege = new messegeSchema(req.body)
    try {
        const saveMessege = newMessege.save()
        res.status(200).json(saveMessege)
    } catch (error) {
        res.status(500).json(error)
    }
}


// Get messege
const messegeGet = async (req, res) => {
    try{
        const messegeData = await messegeSchema.find({
            conversationId: req.params.conversationId
        })
        // res.status(200).json(messegeData)
        res.send(messegeData)
    }catch(error){
        res.status(500).json(error)
    }
}
module.exports = { messegePost, messegeGet }