const mongoose = require('mongoose')

const conversationCon= async ( req, res)=>{
    const conversationData = req.body
    console.log(conversationData)
}


module.exports = {conversationCon}