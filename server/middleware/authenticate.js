const registrationSchema = require('../models/registrationSchema')
const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
    const user = true
    try {
        if (user) {
            next()
            res.status(200).json("hello")
        } else (
            console.log("error")
        )
    } catch (error) {
        res.status(401).json("Unautharised")
    }
}

module.exports = authenticate