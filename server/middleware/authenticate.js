const registrationSchema = require('../models/registrationSchema')
const jwt = require('jsonwebtoken')



const authenticate = async (req, res, next) => {

    try {
        const token = req.cookies.Biscuit
        if (!token) {
            res.status(404).json("Token not found")
        }

        const isVerify = jwt.verify(token, "iamsouravpanjailovemyfamily")
        if (!isVerify) {
            res.status(404).json("Invalid Token")
        }

        const userData = await registrationSchema.findOne({ _id: isVerify._id })
    
        req.userData = userData        
        next()
        
    } catch (err) {
        console.log(err)
    }
}

module.exports = authenticate