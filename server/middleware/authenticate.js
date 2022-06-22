const registrationSchema = require('../models/registrationSchema')
const jwt = require('jsonwebtoken')

const authenticate = async (req, res, next) => {
    try {

        const user = true
        if (!user) {
            console.log(error)
        } else (
            next()
        )

    } catch (error) {
        res.status(401).json("Unautharised")
    }
}

module.exports = authenticate